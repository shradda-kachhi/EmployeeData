
package employeeDetails.ed;

import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import cc.remoteInterface.RemoteServerInterface;
import employeeDetails.ed.config.AppConfig;
import employeeDetails.ed.exceptions.CustomCheckedException;
import employeeDetails.ed.model.Employee;
import employeeDetails.ed.model.HealthInsurance;
import employeeDetails.ed.model.Laptop;
import employeeDetails.ed.model.Mobile;
import employeeDetails.ed.service.EmployeeService;
import employeeDetails.ed.service.LaptopService;
import employeeDetails.ed.service.OrganizationService;

public class AppMain {

	private static final Logger logger = LogManager.getLogger(AppMain.class);

	public static void main(String[] args) throws CustomCheckedException {

		AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);

		
		//  Employee emp = new Employee(); Laptop lap = new Laptop();
		  
		 // HealthInsurance hInsurance = new HealthInsurance();
		  //logger.info("sftddddddddddddddddddddddddddddddddddddddd");
		EmployeeService		  employeeService = applicationContext.getBean("employeeService", EmployeeService.class);
		
		  try { employeeService.insertProCall(35,new Date(),"employee 2",200350,1); }
		  catch (Exception e) { // TODO Auto-generated catch block e.printStackTrace();
		  }
		 

		//employeeService.getEmployee(2);
	//	 RemoteServerInterface remote =		 applicationContext.getBean("remoteService",RemoteServerInterface.class);
	//	 System.out.println(remote.remoteGetEmployee(1).getInsurance().getInsuranceTyep());
		// System.out.println(remote.remoteGetEmployee(1).getName());

		// OrganizationService organ = applicationContext.getBean("OrganizationService",
		// OrganizationService.class);

		// LaptopService laptopService = applicationContext.getBean("LaptopService",
		// LaptopService.class);

		// if we use impl here than it will gice error because @transactional creates a
		// bean whuich is a proxy bean so instead of implemetation bean you will get
		// error Bean named 'employeeService' must be of type
		// [employeeDetails.ed.Service.EmployeeServiceImp], but was actually of type
		// [com.sun.proxy.$Proxy28]

		/*
		 * emp.setInsurance(hInsurance);
		 * 
		 * emp.setJoining_date(new Date()); emp.setName("emp_1"); emp.setSalary(5265);
		 * System.out.println(emp.toString());
		 * 
		 * lap.setAssetBrand("hp");
		 * 
		 * 
		 * hInsurance.setInsuranceTyep("gold");
		 * 
		 * List<Mobile> mobList = emp.getMobileList(); for (int i = 0; i < 5; i++) {
		 * Mobile mo = new Mobile(); mo.setMobileBrand("brand__" + i);
		 * mo.setAllocatedTo(emp); mobList.add(mo); }
		 * 
		 * 
		 * System.out.println(employeeService.saveEmployee(emp));
		 */

		// test crud

		// employeeService.getEmployeeList().forEach((i ->
		// System.out.println(i.toString())));
		// Employee employUp = employeeService.getEmployee(2);
		// System.out.println(employUp.toString());
		// employUp.setName("Shradda");
		// System.out.println(employeeService.updateEmployee(employUp).getName());

		// employeeService.getEmployee("sh").forEach((i ->
		// System.out.println(i.toString())));
		// employeeService.getEmployee(new Date("November 19, 2020 11:13:00"),new
		// Date()).forEach((i -> System.out.println(i.toString())));
		// employeeService.getMaxSalaryEmployee().forEach((i ->
		// System.out.println(i.toString())));

		// try { organ.saveEmployeeInfo(emp, lap); }
		// catch (CustomCheckedException e) {
		// System.out.println("exception occuyrred"); }

		// If we try to do this we will get Illegaltarancaasction aexception because
		// laptop srvice has a propogation of mandatory i.e it requires already running
		// transaction toperform that function marked with mandatory

		// check diffrent propogations type

		// laptopService.saveLaptop(lap); laptopService.testSupport();
		// laptopService.testNever(); organ.callPropogationTypes();

		// Second level cache testing

		// employeeService.getEmployee(2); employeeService.getEmployee(2);

		// select query fired with left outer join in eager // default is lazy

		// employeeService.getEmployeeUseFetch(); //
		// System.out.println(emp.getInsurance().getInsuranceTyep());
		applicationContext.close();

	}
}
