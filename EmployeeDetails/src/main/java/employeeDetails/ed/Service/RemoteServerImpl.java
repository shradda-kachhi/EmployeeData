package employeeDetails.ed.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import employeeDetails.ed.Model.Employee;

@Service("remoteService")
public class RemoteServerImpl implements RemoteServerInterface {
	@Autowired
	EmployeeService employeeService;
	
	@Override
	public String sayHelloWorld() {
		System.out.println("Inside sayHello World");
 return "returned  from Employee server";
	}

	@Override
	public Employee remoteGetEmployee(int id) {
		
		return  employeeService.getEmployee(id);
	}

}
