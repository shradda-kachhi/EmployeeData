package remoteServer.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter;
import remoteServer.services.RemoteServerInterface;




@Configuration
@ComponentScan({"remoteServer.services"})

public class AppConfigServer 
{
	@Autowired
	@Qualifier("remoteService")
	RemoteServerInterface remoteService;
	
//@Bean(name="remoteExporter")

public 	HttpInvokerServiceExporter getbean()
{
	
	HttpInvokerServiceExporter bean = new HttpInvokerServiceExporter();
		bean.setService(remoteService);
		bean.setServiceInterface(RemoteServerInterface.class);
		return bean;
}
}
