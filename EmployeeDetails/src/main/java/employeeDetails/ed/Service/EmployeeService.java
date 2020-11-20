package employeeDetails.ed.Service;

import java.util.List;

import employeeDetails.ed.Model.Employee;

public interface EmployeeService {
	public List<Employee> getEmployeeList();
	public int saveEmployee(Employee emp);
	public Employee getEmployee(int id);
	public Employee updateEmployee(Employee emp);

}
