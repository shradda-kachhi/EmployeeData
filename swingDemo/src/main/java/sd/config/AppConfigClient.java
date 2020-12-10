package sd.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean;
import cc.remoteInterface.RemoteServerInterface;





@Configuration
@ComponentScan("sd.config")
public class AppConfigClient 
{
	
@Bean(name="remoteService")
public 	HttpInvokerProxyFactoryBean getbean()
{
		HttpInvokerProxyFactoryBean bean = new HttpInvokerProxyFactoryBean();
		//bean.setServiceUrl("http://localhost:8080/remoteServer/remoteExporter");
		bean.setServiceUrl("http://localhost:8080/EmployeeDetails/remoteExporter");
		bean.setServiceInterface(RemoteServerInterface.class);
		return bean;
}
}
