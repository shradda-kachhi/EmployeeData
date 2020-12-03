package remoteServer;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import remoteServer.services.RemoteServerInterface;


/**
 * Hello world!
 *
 */
public class AppServer 
{
    public static void main( String[] args )
    {
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(remoteServer.config.AppConfigServer.class);
 
    	
    }
}
