package com.aop;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.aop.demo.HelloWorld;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring-aop.xml"})
public class DemoTest implements ApplicationContextAware{
	
	private ApplicationContext context;
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		// TODO Auto-generated method stub
		context = applicationContext;
	}
	@Test
	public void demoHelloWord(){
		System.out.println("1");
		HelloWorld h1 = (HelloWorld) context.getBean("helloWorldImpl1");
		h1.doPrint();
		h1.printHelloWorld();
	}
}
