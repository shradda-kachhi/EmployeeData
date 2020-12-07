package remoteServer.services;

import org.springframework.stereotype.Service;

@Service("remoteService")
public class RemoteServiceImpl implements RemoteServerInterface {

	public String sayHelloWorld() {
		System.out.println("call inside server is made from client");
	return "insised server ";

	}

}
