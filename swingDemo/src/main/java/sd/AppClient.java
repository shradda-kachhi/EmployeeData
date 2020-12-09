package sd;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import cc.remoteInterface.RemoteServerInterface;
import sd.swingDemo.EmployeeInfo;
import sd.swingDemo.ProgressCallAnother;


/**
 * Hello world!
 *
 */
public class AppClient 
{
	
    public static void main( String[] args )
    {
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(sd.config.AppConfigClient.class);
     //  	RemoteServerInterface interfaceR =applicationContext.getBean("remoteService",RemoteServerInterface.class);
    //	System.out.println(interfaceR.sayHelloWorld());
   // 	System.out.println(interfaceR.remoteGetEmployee(1).getInsurance().getInsuranceTyep());
    	
    	//HelloFrame helloFrame = new HelloFrame();
    	//new RadioButtonGrid();
    	//new MouseLsten();
    //	new ProgressCallAnother();
    //	new EmployeeInfo();
    	applicationContext.getBean("EmployeeInfo");
    }
}
