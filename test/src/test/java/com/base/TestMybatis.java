package com.base;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.base.dao.StudentMapper;
import com.base.service.StudentService;
import com.base.service.StudentServiceTest;

public class TestMybatis extends BaseJunit{

	private static Logger logger = Logger.getLogger(TestMybatis.class);
	
/*	@Autowired*/
	private StudentService studentService;
	@Autowired
	private StudentMapper studentMapper;
	
	@Test
	public void seleTest(){
		System.out.println(studentService.selectByPrimaryKey(1));
	}
	@Test
	public void demo1(){
		System.out.println(studentMapper.selectByPrimaryKey(1));
	}
}
