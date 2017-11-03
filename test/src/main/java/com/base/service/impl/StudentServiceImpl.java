package com.base.service.impl;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
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
	@Autowired
	public StudentMapper sm1;
	@Autowired
	public StudentCMSMapper sm2;
	@Autowired
	public StudentMallMapper sm3;
	@Autowired
	public StudentResourceMapper sm4;
	@Autowired
	public StudentExamMapper sm5;
	@Override
	public StudentResource selectByPrimaryKey(Integer id){
	//	DataSourceContextHolder.setDbType(DataSourceType.RESOURCE);
		StudentResource s4 = sm4.selectByPrimaryKey(id);
	//	System.out.println(DataSourceContextHolder.getDbType());
	//	DataSourceContextHolder.setDbType(DataSourceType.CMS);
		StudentCMS s2 = sm2.selectByPrimaryKey(id);
	//	System.out.println(DataSourceContextHolder.getDbType());
	//	DataSourceContextHolder.setDbType(DataSourceType.BASE);
		Student s1 = sm1.selectByPrimaryKey(id);
	//	System.out.println(DataSourceContextHolder.getDbType());
	//	DataSourceContextHolder.setDbType(DataSourceType.MALL);
		StudentMall s3 = sm3.selectByPrimaryKey(id);
	//	System.out.println(DataSourceContextHolder.getDbType());
	//	DataSourceContextHolder.setDbType(DataSourceType.EXAM);
		StudentExam s5 = sm5.selectByPrimaryKey(id);
	//	System.out.println(DataSourceContextHolder.getDbType());
		return s4;
	}
	@Override
	public Student select(Integer id){
		DataSourceContextHolder.setDbType(DataSourceType.BASE);
		Student s1 = sm1.selectByPrimaryKey(id);
		DataSourceContextHolder.setDbType(DataSourceType.CMS);
		StudentCMS s2 = sm2.selectByPrimaryKey(id);
		System.out.println(s2);
		System.out.println(DataSourceContextHolder.getDbType());
		DataSourceContextHolder.setDbType(DataSourceType.MALL);
		StudentMall s3 = sm3.selectByPrimaryKey(id);
		System.out.println(DataSourceContextHolder.getDbType());
		return s1;
	}
	@Override
	public int insert(Student stu) {
		// TODO Auto-generated method stub
		StudentExam stue = new StudentExam(stu);
		int s1 = sm5.insert(stue);
		int s = sm1.insert(stu);
		return s1+s;
	}
	
	
	
	
	
	
	
	
	
}
