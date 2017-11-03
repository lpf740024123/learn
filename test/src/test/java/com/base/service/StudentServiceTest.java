package com.base.service;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.zsl.testmybatis.TestMyBatis;

import com.base.dao.StudentMapper;
import com.base.entity.Student;
import com.base.util.BaseJunit;

/**
 * studentService单元测试
 * @ClassName StudentServiceTest
 * @Description: TODO(...)
 * @author 刘鹏飞
 * @date 2017-10-25下午5:06:32
 *
 */
public class StudentServiceTest extends BaseJunit{
	private static Logger logger = Logger.getLogger(StudentServiceTest.class);
	@Autowired
	private StudentService studentService;
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
	
	@Test
	public void seleTest(){
		System.out.println(studentService.selectByPrimaryKey(1));
	}
	
	@Test
	public void seleTest1(){
		System.out.println(studentService.select(1));
	}
	
	public static void main(String[] args) {
		ApplicationContext con = new ClassPathXmlApplicationContext("spring-mvc.xml","spring-mybatis.xml");
		StudentMapper studentMapper = con.getBean(StudentMapper.class);
		Student s = studentMapper.selectByPrimaryKey(1);
		System.out.println(s);
	}
}
