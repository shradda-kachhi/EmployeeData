package employeeDetails.ed.service;

import java.util.Date;
import java.util.List;

import employeeDetails.ed.model.Employee;

public interface EmployeeService {
	public List<Employee> getEmployeeList();

	public int saveEmployee(Employee emp);

	public cc.models.Employee getEmployee(int id);

	public Employee updateEmployee(Employee emp);

	public Employee getEmployeeUseFetch(int emp);
	
	public  Employee  getEmployeeUseFetch();
	public List<Employee> getMaxSalaryEmployee();
	public void insertProCall(int id,Date doj,String nme,int sal,int lapid);
	public Employee getEmployeeEntity(int id);
}
