package com.base.service;

import com.base.entity.Student;
import com.resource.entity.StudentResource;


public interface StudentService {
	
	public StudentResource selectByPrimaryKey(Integer id);

	int insert(Student stu);
	
	
	public Student select(Integer id);

}
