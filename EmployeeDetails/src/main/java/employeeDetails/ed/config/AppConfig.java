package employeeDetails.ed.config;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import cc.remoteInterface.RemoteServerInterface;
import employeeDetails.ed.dao.EmployeeDao;





@Configuration
@ComponentScan({ "employeeDetails.ed" })
@EnableTransactionManagement
@EnableWebMvc
@EnableAspectJAutoProxy(proxyTargetClass= true)
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
	@Bean
	public ModelMapper getModelMapper()
	{
		return new ModelMapper();
	}

}
