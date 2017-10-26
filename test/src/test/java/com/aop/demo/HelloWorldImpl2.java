package com.aop.demo;

/**
 * 
 * @ClassName HelloWorldImpl2
 * @Description: TODO(...)
 * @author 刘鹏飞
 * @date 2017-10-26上午9:57:30
 *
 */
public class HelloWorldImpl2 implements HelloWorld{

	@Override
	public void printHelloWorld() {
		// TODO Auto-generated method stub
		System.out.println("Enter HelloWorldImpl2.printHelloWorld()");
	}

	@Override
	public void doPrint() {
		// TODO Auto-generated method stub
		System.out.println("Enter HelloWorldImpl2.doPrint()");
        return ;
	}

	
}
