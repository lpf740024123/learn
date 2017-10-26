package com.aop.demo;

/**
 * 切面
 * @ClassName HelloWorld
 * @Description: TODO(...)
 * @author 刘鹏飞
 * @date 2017-10-26上午9:55:31
 *
 */
public interface HelloWorld {

	/**
	 * 连接点
	 * @Title: printHelloWorld
	 * @Description:TODO(...)
	 * @see <p></p>
	 * @author 刘鹏飞
	 * @date: 2017-10-26 上午9:59:10
	 *
	 */
	void printHelloWorld();
    void doPrint();
}
