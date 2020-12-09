package employeeDetails.ed.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cc.models.Employee;
import cc.models.HealthInsurance;
import cc.remoteInterface.RemoteServerInterface;




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
		
		return employeeService.getEmployee(id);
		
		 }

}
