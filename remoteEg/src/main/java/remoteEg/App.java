package remoteEg;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import remoteEg.services.RemoteServerInterface;


/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(remoteEg.config.AppConfig.class);
    
    	RemoteServerInterface interfaceR =applicationContext.getBean("remoteService",RemoteServerInterface.class);
    	interfaceR.sayHelloWorld();
    }
}
