package employeeDetails.ed.Service;

import java.util.Date;
import java.util.List;

import employeeDetails.ed.Model.Employee;

public interface EmployeeService {
	public List<Employee> getEmployeeList();

	public int saveEmployee(Employee emp);

	public cc.models.Employee getEmployee(int id);

	public Employee updateEmployee(Employee emp);

	public Employee getEmployeeUseFetch(int emp);
	
	public  Employee  getEmployeeUseFetch();
	public List<Employee> getMaxSalaryEmployee();
	public void insertProCall(int id,Date doj,String nme,int sal,int lapid);
}
