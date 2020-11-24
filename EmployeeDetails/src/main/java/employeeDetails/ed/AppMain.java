package employeeDetails.ed;

import java.util.Date;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import employeeDetails.ed.Config.AppConfig;
import employeeDetails.ed.Model.Employee;
import employeeDetails.ed.Model.Laptop;
import employeeDetails.ed.Service.EmployeeService;
import employeeDetails.ed.Service.LaptopService;
import employeeDetails.ed.Service.OrganizationService;
import org.apache.log4j.Logger;

public class AppMain {

	private static final Logger logger = Logger.getLogger(AppMain.class);
	
	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
		Employee emp = new Employee();
		Laptop lap = new Laptop();
		EmployeeService employeeService = applicationContext.getBean("employeeService", EmployeeService.class);
	
		OrganizationService organ = applicationContext.getBean("OrganizationService",OrganizationService.class);
		
		LaptopService laptopService = applicationContext.getBean("LaptopService",LaptopService.class);
		/*
		 * if we use impl here than it will gice error because @transactional creates a
		 * bean whuich is a proxy bean so instead of implemetation bean you will get
		 * error Bean named 'employeeService' must be of type
		 * [employeeDetails.ed.Service.EmployeeServiceImp], but was actually of type
		 * [com.sun.proxy.$Proxy28]
		 */

		
		
		  emp.setJoining_date(new Date());
		  
		  emp.setName("emp_128"); emp.setSalary(5265);
		  System.out.println(emp.toString()); logger.debug("logger is working");
		  lap.setAssetBrand("appleP");
		  
		  System.out.println(employeeService.saveEmployee(emp));
		 
		/*
		 * employeeService.getEmployeeList().forEach((i ->
		 * System.out.println(i.toString()))); Employee employUp =
		 * employeeService.getEmployee(2); System.out.println(employUp.toString());
		 * employUp.setName("Shradda");
		 * System.out.println(employeeService.updateEmployee(employUp).getName());
		 */

		// employeeService.getEmployee("sh").forEach((i ->
		// System.out.println(i.toString())));
		// employeeService.getEmployee(new Date("November 19, 2020 11:13:00"),new
		// Date()).forEach((i -> System.out.println(i.toString())));
		// employeeService.getMaxSalaryEmployee().forEach((i ->
		// System.out.println(i.toString())));

		/*try {
			organ.saveEmployeeInfo(emp, lap);
		} catch (CustomCheckedException e) {
		System.out.println("exception occuyrred");
		}
		*/
		
		/*
		 * If we try to do this we will get 
		 * Illegaltarancaasction aexception because laptop srvice has a propogation of mandatory
		 * i.e it requires  already running transaction toperform that function marked with mandatory
		 * */
		
		
		 // laptopService.saveLaptop(lap);
	//	  laptopService.testSupport();
	//	  laptopService.testNever(); 
	//	  applicationContext.close();
		 

		// organ.callPropogationTypes();
		
		/* Second level cache testing */
		
		employeeService.getEmployee(2);
		employeeService.getEmployee(2);
	}
}
