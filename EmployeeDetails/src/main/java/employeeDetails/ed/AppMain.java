
package employeeDetails.ed;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

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
import employeeDetails.ed.service.ScheduledExecutor;
import employeeDetails.ed.service.TaskShutDowns;

public class AppMain {

	private static final Logger logger = LogManager.getLogger(AppMain.class);
	public static AnnotationConfigApplicationContext applicationContext;

	public static void main(String[] args) throws CustomCheckedException, InterruptedException {

		applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);

		// Employee emp = new Employee(); Laptop lap = new Laptop();

		// HealthInsurance hInsurance = new HealthInsurance();
		// logger.info("sftddddddddddddddddddddddddddddddddddddddd");
		/*
		 * EmployeeService employeeService =
		 * applicationContext.getBean("employeeService", EmployeeService.class);
		 * 
		 * try { employeeService.insertProCall(35,new Date(),"employee 2",200350,1); }
		 * catch (Exception e) { // TODO Auto-generated catch block e.printStackTrace();
		 * }
		 */

		// employeeService.getEmployee(2);
		// RemoteServerInterface remote =
		// applicationContext.getBean("remoteService",RemoteServerInterface.class);
		// System.out.println(remote.remoteGetEmployee(1).getInsurance().getInsuranceTyep());
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

	public void shutDownsCheck() throws InterruptedException {
		ScheduledExecutorService executor = Executors.newScheduledThreadPool(2);

		LocalDateTime nowtIME = LocalDateTime.now();

		TaskShutDowns task1 = applicationContext.getBean("taskshut", TaskShutDowns.class);
		task1.setTaskName("work 1");
		ScheduledFuture<String> return1 = executor.schedule(task1, 10, TimeUnit.SECONDS);

		TaskShutDowns task2 = applicationContext.getBean("taskshut", TaskShutDowns.class);
		task2.setTaskName("work 2");
		ScheduledFuture<String> return2 = executor.schedule(task2, 20, TimeUnit.SECONDS);

		TaskShutDowns task3 = applicationContext.getBean("taskshut", TaskShutDowns.class);
		task3.setTaskName("work 3");
		ScheduledFuture<String> return3 = executor.schedule(task3, 30, TimeUnit.SECONDS);

		Thread.sleep(15000);
		executor.shutdown();// if shutDownNow is used even executing task is stopped

		System.out.println("Task-1 is done in " + return1.isDone());
		System.out.println("Task-2 is done in " + return2.isDone());
		System.out.println("Task-3 is done in " + return3.isDone());

		System.out.println("***********Waiting for tasks to be complete*********");

		executor.awaitTermination(1, TimeUnit.HOURS);/// this will wait for all task to complete or this await time
														/// which ever is first

		System.out.println("***********All tasks are completed nows*********");
		System.out.println("Task-1 is done in " + return1.isDone());
		System.out.println("Task-2 is done in " + return2.isDone());
		System.out.println("Task-3 is done in " + return3.isDone());
	}
	public void threadPoolLocalCheck()
	{
		/*
		 * ScheduledExecutor task = applicationContext.getBean("scheduler",
		 * ScheduledExecutor.class);
		 * 
		 * ScheduledExecutorService executorService =
		 * Executors.newScheduledThreadPool(3);
		 * 
		 * executorService.scheduleAtFixedRate(task, 2, 15, TimeUnit.SECONDS);
		 * 
		 * try { Thread.sleep(60000); } catch (InterruptedException e) {
		 * e.printStackTrace(); } executorService.shutdown();
		 */

		ExecutorService executorService = Executors.newFixedThreadPool(3);
		for (int i = 1; i < 11; i++)
			executorService.submit(new ScheduledExecutor("task__" + i));

		executorService.shutdown();
	}
}
