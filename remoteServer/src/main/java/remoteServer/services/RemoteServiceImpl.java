package remoteServer.services;

import org.springframework.stereotype.Service;

import cc.models.Employee;


@Service("remoteService")
public class RemoteServiceImpl implements RemoteServerInterface {

	public String sayHelloWorld() {
		System.out.println("call inside server is made from client");
	return "insised server ";

	}
	@Override
	public Employee remoteGetEmployee(int id) {
		
		//return  employeeService.getEmployee(id);
		Employee emp= new Employee();
		emp.setName("Shradda");
		return emp;
	}
}
