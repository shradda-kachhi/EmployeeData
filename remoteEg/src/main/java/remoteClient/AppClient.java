package remoteClient;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import remoteClient.services.RemoteServerInterface;


/**
 * Hello world!
 *
 */
public class AppClient 
{
    public static void main( String[] args )
    {
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(remoteClient.config.AppConfigClient.class);
    
    	RemoteServerInterface interfaceR =applicationContext.getBean("remoteService",RemoteServerInterface.class);
    	interfaceR.sayHelloWorld();
    }
}
