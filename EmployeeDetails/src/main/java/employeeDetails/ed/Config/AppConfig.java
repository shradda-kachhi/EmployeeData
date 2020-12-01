package employeeDetails.ed.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.rmi.RmiServiceExporter;
import org.springframework.remoting.support.RemoteExporter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import employeeDetails.ed.Service.RemoteServerImpl;
import employeeDetails.ed.Service.RemoteServerInterface;


@Configuration
@ComponentScan({"EmployeeDetails.ed"})
@EnableTransactionManagement(proxyTargetClass = true)
public class AppConfig 
{
	@Bean
public 	RemoteExporter getExporter()
{
	RmiServiceExporter exporter = new RmiServiceExporter();
	exporter.setServiceInterface(RemoteServerInterface.class);
	exporter.setServiceName("remoteService");
	exporter.setService(new RemoteServerImpl());
	return exporter;
}
}
