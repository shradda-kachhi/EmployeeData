package sd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import cc.models.Employee;
import cc.remoteInterface.RemoteServerInterface;

@Service("employeeService")
public class EmployeeDetailsService {

	@Autowired
	@Qualifier(value="remoteService")
	RemoteServerInterface interfaceR;
	
	public Employee getEmpById(int id)
	
	{  
		System.out.println("inside getById");
		interfaceR.sayHelloWorld();
		return interfaceR.remoteGetEmployee(id);
	}
}
