package employeeDetails.ed;

import java.util.Date;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import employeeDetails.ed.Config.AppConfig;
import employeeDetails.ed.Model.Employee;
import employeeDetails.ed.Service.EmployeeServiceImp;

public class AppMain {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
		Employee emp = new Employee();
		EmployeeServiceImp employeeService = applicationContext.getBean("employeeService", EmployeeServiceImp.class);
		/*
		 * if we use impl here than it will gice error because @transactional creates a
		 * bean whuich is a proxy bean so instead of implemetation bean you will get
		 * error Bean named 'employeeService' must be of type
		 * [employeeDetails.ed.Service.EmployeeServiceImp], but was actually of type
		 * [com.sun.proxy.$Proxy28]
		 */

		/*
		 * emp.setJoining_date(new Date());
		 * 
		 * emp.setName("emp_8"); emp.setSalary(120265);
		 * System.out.println(emp.toString());
		 * System.out.println(employeeService.saveEmployee(emp));
		 */

		/*
		 * employeeService.getEmployeeList().forEach((i ->
		 * System.out.println(i.toString()))); Employee employUp =
		 * employeeService.getEmployee(2); System.out.println(employUp.toString());
		 * employUp.setName("Shradda");
		 * System.out.println(employeeService.updateEmployee(employUp).getName());
		 */

	//	employeeService.getEmployee("sh").forEach((i -> System.out.println(i.toString())));
	//	employeeService.getEmployee(new Date("November 19, 2020 11:13:00"),new Date()).forEach((i -> System.out.println(i.toString())));
		employeeService.getMaxSalaryEmployee().forEach((i -> System.out.println(i.toString())));
		applicationContext.close();

	}
}
