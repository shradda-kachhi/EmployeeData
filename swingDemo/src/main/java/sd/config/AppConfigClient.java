package sd.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean;
import cc.remoteInterface.RemoteServerInterface;





@Configuration
@ComponentScan(basePackages = {"sd.config","sd.service","sd.swingDemo"})
public class AppConfigClient 
{
	
@Bean(name="remoteService")
public 	RemoteServerInterface getbean()
{
		HttpInvokerProxyFactoryBean bean = new HttpInvokerProxyFactoryBean();
		//bean.setServiceUrl("http://localhost:8080/remoteServer/remoteExporter");
		bean.setServiceUrl("http://localhost:8080/EmployeeDetails/remoteExporter");
		bean.setServiceInterface(RemoteServerInterface.class);
		return (RemoteServerInterface) bean.getObject();
}
}
