package employeeDetails.ed.Config;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@ComponentScan({"EmployeeDetails.ed"})
@EnableTransactionManagement(proxyTargetClass = true)
public class AppConfig 
{
	
}
