package com.base;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.atomikos.jdbc.AtomikosDataSourceBean;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:context/applicationContext.xml"})
public class BaseJunit implements ApplicationContextAware{
	
	protected static ApplicationContext context;
	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		// TODO Auto-generated method stub
		context = applicationContext;
	}

	/**
     * 必须在每个单元测试类运行结束之后关闭连接，
     * 要不会出现Another resource already exists with name xxx一次
     */
    @AfterClass
    public static void destroyTransaction() {
       /* AtomikosDataSourceBean webds = (AtomikosDataSourceBean)context.getBean("webDataSource");
        AtomikosDataSourceBean ds = (AtomikosDataSourceBean)context.getBean("dataSource");
        webds.close();
        ds.close();*/
    }
}
