package employeeDetails.ed.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import cc.models.Employee;
import cc.remoteInterface.RemoteServerInterface;




@Service("remoteService")
public class RemoteServerImpl implements RemoteServerInterface {
	@Autowired
	@Qualifier("employeeService")
	EmployeeService employeeService;
	
	@Override
	public String sayHelloWorld() {
		System.out.println("Inside sayHello World");
 return "returned  from Employee server";
	}

	
	  @Override public Employee remoteGetEmployee(int id) {
	  
	  return employeeService.getEmployee(id);
	  
	  }
	 

}
