package com.aop.demo;

/**
 * 横切关注点
 * @ClassName TimeHandler
 * @Description: TODO(...)
 * @author 刘鹏飞
 * @date 2017-10-26上午9:58:11
 *
 */
public class TimeHandler {

	 public void printTime(){
	        System.out.println("CurrentTime = " + System.currentTimeMillis());
	 }
}
