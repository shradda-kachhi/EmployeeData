package EmployeeDetails.ed;

import java.util.Date;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import EmployeeDetails.ed.Config.AppConfig;
import EmployeeDetails.ed.Model.Employee;
import EmployeeDetails.ed.Service.EmployeeService;

public class AppMain {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
		Employee emp = new Employee();
		EmployeeService employeeService = applicationContext.getBean("employeeService", EmployeeService.class);
		emp.setJoining_date(new Date());

		emp.setName("emp_6");
		emp.setSalary(120265);
		System.out.println(emp.toString());
		System.out.println(employeeService.saveEmployee(emp));

		/*
		 * employeeService.getEmployeeList().forEach((i ->
		 * System.out.println(i.toString()))); Employee employUp =
		 * employeeService.getEmployee(20); System.out.println(employUp.toString());
		 * employUp.setName("Shradda");
		 * System.out.println(employeeService.updateEmployee(employUp).getName());
		 */

		applicationContext.close();

	}
}
