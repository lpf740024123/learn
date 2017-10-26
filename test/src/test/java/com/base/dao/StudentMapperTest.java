package com.base.dao;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.base.util.BaseJunit;

public class StudentMapperTest extends BaseJunit{

	@Autowired
	private StudentMapper studentMapper; 
	@Test
	public void selectByPrimaryKey(){
		System.out.println(studentMapper.selectByPrimaryKey(11));
	}
}
