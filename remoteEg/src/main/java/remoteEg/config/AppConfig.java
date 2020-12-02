package remoteEg.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.rmi.RmiProxyFactoryBean;

import remoteEg.services.RemoteServerInterface;




@Configuration


public class AppConfig 
{
	@Bean(name="remoteService")
public 	RmiProxyFactoryBean getbean()
{
		RmiProxyFactoryBean bean = new RmiProxyFactoryBean();
		bean.setServiceUrl("rmi://localhost:1099//remoteService");
		bean.setServiceInterface(RemoteServerInterface.class);
		return bean;
}
}
