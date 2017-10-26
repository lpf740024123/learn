package com.base.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.base.dao.StudentMapper;
import com.base.datasource.DataSourceContextHolder;
import com.base.datasource.DataSourceType;
import com.base.entity.Student;
import com.base.service.StudentService;
import com.cms.dao.StudentCMSMapper;
import com.cms.entity.StudentCMS;
import com.exam.dao.StudentExamMapper;
import com.exam.entity.StudentExam;
import com.mall.dao.StudentMallMapper;
import com.mall.entity.StudentMall;
import com.resource.dao.StudentResourceMapper;
import com.resource.entity.StudentResource;

@Service("studentService")
public class StudentServiceImpl implements StudentService {
	@Resource
	public StudentMapper sm1;
	@Resource
	public StudentCMSMapper sm2;
	@Resource
	public StudentMallMapper sm3;
	@Resource
	public StudentResourceMapper sm4;
	@Resource
	public StudentExamMapper sm5;
	@Override
	public StudentResource selectByPrimaryKey(Integer id){
		DataSourceContextHolder.setDbType(DataSourceType.RESOURCE);
		StudentResource s4 = sm4.selectByPrimaryKey(id);
		DataSourceContextHolder.setDbType(DataSourceType.CMS);
		StudentCMS s2 = sm2.selectByPrimaryKey(id);
		DataSourceContextHolder.setDbType(DataSourceType.BASE);
		Student s1 = sm1.selectByPrimaryKey(id);
		DataSourceContextHolder.setDbType(DataSourceType.MALL);
		StudentMall s3 = sm3.selectByPrimaryKey(id);
		DataSourceContextHolder.setDbType(DataSourceType.EXAM);
		StudentExam s5 = sm5.selectByPrimaryKey(id);
		return s4;
	}
	
	@Override
	public int insert(Student stu) {
		// TODO Auto-generated method stub
		DataSourceContextHolder.setDbType(DataSourceType.BASE);
		int s = sm1.insert(stu);
		
		DataSourceContextHolder.setDbType(DataSourceType.EXAM);
		StudentExam stue = new StudentExam(stu);
		int s1 = sm5.insert(stue);
		return 0;
	}
	
	
	
	
	
	
	
	
	
}
