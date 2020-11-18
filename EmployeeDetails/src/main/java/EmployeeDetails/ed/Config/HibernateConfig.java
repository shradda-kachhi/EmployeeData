package EmployeeDetails.ed.Config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;

@Configuration
@ComponentScan({"EmployeeDetails.ed.Config"})
@PropertySource({"classpath:application.properties"})
public class HibernateConfig {
@Autowired 
Environment env;

@Bean
public LocalSessionFactoryBean getSessionFactory()
{
	LocalSessionFactoryBean factory = new LocalSessionFactoryBean();
	factory.setDataSource(dataSource());
	factory.setPackagesToScan("EmployeeDetails.ed.Model");
	factory.setHibernateProperties(properties());
	return factory;
}

public DataSource dataSource()
{
	DriverManagerDataSource dataSource = new DriverManagerDataSource();
	 dataSource.setDriverClassName(env.getRequiredProperty("jdbc.driverClassName"));
     dataSource.setUrl(env.getRequiredProperty("jdbc.url"));
     dataSource.setUsername(env.getRequiredProperty("jdbc.username"));
     dataSource.setPassword(env.getRequiredProperty("jdbc.password"));
     return dataSource;
	}

public Properties properties()
{
	Properties properties = new Properties();
	properties.put("hibernate.dialect", env.getRequiredProperty("hibernate.dialect"));
    properties.put("hibernate.show_sql", env.getRequiredProperty("hibernate.show_sql"));
    properties.put("hibernate.hbm2ddl.auto",env.getProperty("hibernate.hbm2ddl.auto"));
    return properties;
}
}
