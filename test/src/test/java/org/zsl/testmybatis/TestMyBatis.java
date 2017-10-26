package org.zsl.testmybatis;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.base.service.StudentService;

@RunWith(SpringJUnit4ClassRunner.class)		
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
public class TestMyBatis {
	private static Logger logger = Logger.getLogger(TestMyBatis.class);
	@Autowired
	private StudentService studentService;

	@Test
	public void test1() {
		System.out.println("111");
		studentService.selectByPrimaryKey(1);
		System.out.println("222");
	}
}
