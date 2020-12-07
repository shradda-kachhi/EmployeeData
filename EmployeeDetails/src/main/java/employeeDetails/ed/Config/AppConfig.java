package employeeDetails.ed.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import employeeDetails.ed.Service.RemoteServerInterface;




@Configuration
@ComponentScan({ "EmployeeDetails.ed" })
@EnableTransactionManagement(proxyTargetClass = true)
public class AppConfig {

	 @Autowired
	 RemoteServerInterface remoteService;
	 
	@Bean(name = "remoteExporter")
	public HttpInvokerServiceExporter getExporter() {
		HttpInvokerServiceExporter exporter = new HttpInvokerServiceExporter();
		exporter.setService(remoteService);
		exporter.setServiceInterface(RemoteServerInterface.class);
		return exporter;
	}

}
