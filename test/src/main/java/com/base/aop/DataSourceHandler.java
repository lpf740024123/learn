package com.base.aop;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

import com.base.datasource.DataSourceContextHolder;
import com.base.datasource.DataSourceType;

/**
 * 切换数据源
 * @ClassName DataSourceHandler
 * @Description: TODO(...)
 * @author 刘鹏飞
 * @date 2017-10-26上午11:08:44
 *
 */
public class DataSourceHandler {
	
	private static Logger logger = Logger.getLogger(DataSourceHandler.class);
	
	/**
	 * 
	 * @Title: after
	 * @Description:TODO(...)
	 * @see <p></p>
	 * @param joinPoint 连接点
	 * @author 刘鹏飞
	 * @date: 2017-10-26 下午2:47:32
	 *
	 */
	public void beforeBase(JoinPoint joinPoint){
		cutDataSource(DataSourceType.BASE);
	}
	
	public void beforeCms(JoinPoint joinPoint){
		cutDataSource(DataSourceType.CMS);
	}
	
	public void beforeExam(JoinPoint joinPoint){
		cutDataSource(DataSourceType.EXAM);
	}
	public void beforeMall(JoinPoint joinPoint){
		cutDataSource(DataSourceType.MALL);
	}
	public void beforeResource(JoinPoint joinPoint){
		cutDataSource(DataSourceType.RESOURCE);
	}
	
	/**
	 * 切换数据源
	 * @Title: cutDataSource
	 * @Description:TODO(...)
	 * @see <p></p>
	 * @param type
	 * @author 刘鹏飞
	 * @date: 2017-11-2 下午2:23:13
	 *
	 */
	private void cutDataSource(String type){
		logger.info("当前线程数据源链接切换前："+DataSourceContextHolder.getDbType());
		DataSourceContextHolder.setDbType(type);
		logger.info("当前线程数据源链接切换："+DataSourceContextHolder.getDbType());
	}
	
	public void after(JoinPoint joinPoint){
		
	}
	
	/**
	 * 
	 * @Title: around
	 * @Description:TODO(...)
	 * @see <p></p>
	 * @param pjp 正在进行的连接点
	 * @author 刘鹏飞
	 * @date: 2017-10-26 下午2:53:24
	 *
	 */
	public void around(ProceedingJoinPoint pjp) {
		try {
			//连接点执行
			Object obj = pjp.proceed();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void afterReturn(JoinPoint joinPoint,Object returnVal){
		
	}
	
    public void afterThrowing(JoinPoint joinPoint,Throwable error){
        System.out.println("AOP AfterThrowing Advice..." + error);
        System.out.println("AfterThrowing...111222");
    }
    
}
