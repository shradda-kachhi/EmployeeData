package remoteClient.services;

import remoteClient.model.Employee;

public interface RemoteServerInterface {
	 public String sayHelloWorld();
	 public Employee remoteGetEmployee(int id);
}
