package sd;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import cc.models.Employee;
import cc.remoteInterface.RemoteServerInterface;
import sd.swingDemo.EmployeeInfo;


/**
 * Hello world!
 *
 */
public class AppClient 
{
	private static RemoteServerInterface interfaceR;
	
    public static void main( String[] args )
    {
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(sd.config.AppConfigClient.class);
    	interfaceR	 =applicationContext.getBean("remoteService",RemoteServerInterface.class);
    //	System.out.println(interfaceR.sayHelloWorld());
// 	System.out.println(interfaceR.remoteGetEmployee(1).getInsurance().getInsuranceTyep());
    	
    	//HelloFrame helloFrame = new HelloFrame();
    	//new RadioButtonGrid();
    	//new MouseLsten();
    //	new ProgressCallAnother();
    	new EmployeeInfo();
    
    }
    
    public Employee getEmployeeInfo(int id)
    {
    	return interfaceR.remoteGetEmployee(id);
    }
}
