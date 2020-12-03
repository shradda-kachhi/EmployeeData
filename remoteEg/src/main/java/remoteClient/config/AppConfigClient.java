package remoteClient.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean;
import org.springframework.remoting.rmi.RmiProxyFactoryBean;

import remoteClient.services.RemoteServerInterface;




@Configuration

public class AppConfigClient 
{
@Bean(name="remoteService")
public 	HttpInvokerProxyFactoryBean getbean()
{
		HttpInvokerProxyFactoryBean bean = new HttpInvokerProxyFactoryBean();
		bean.setServiceUrl("http://localhost:8080/");
		bean.setServiceInterface(RemoteServerInterface.class);
		return bean;
}
}
