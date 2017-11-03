package com.base;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.base.dao.StudentMapper;
import com.base.entity.Student;
import com.base.service.StudentService;
import com.base.service.StudentServiceTest;

public class TestMybatis extends BaseJunit{

	private static Logger logger = Logger.getLogger(TestMybatis.class);
	
	@Autowired
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
	/**
	 * 事务测试
	 * @Title: transTest
	 * @Description:TODO(...)
	 * @see <p></p>
	 * @author 刘鹏飞
	 * @date: 2017-10-25 上午10:24:48
	 *
	 */
	@Test
	public void transTest(){
		Student stu = new Student(1, "张三", 1, 15, "清华");
		studentService.insert(stu);
	}
}
