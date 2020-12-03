package remoteServer.services;

import org.springframework.stereotype.Service;

@Service("remoteService")
public class RemoteServiceImpl implements RemoteServerInterface {

	public String sayHelloWorld() {
	return "insised server";

	}

}
