package employeeDetails.ed.service;

import java.util.Date;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service("scheduler")
public class ScheduledExecutor implements Runnable {
	@Autowired
	@Qualifier("employeeService")
	EmployeeService employeeService;
	
	private String taskName;
	
	public ScheduledExecutor() {
		
	}
	public ScheduledExecutor(String task) {
		this.taskName=task;
	}

	static public ThreadLocal<Integer> local = new ThreadLocal<Integer>() {
		@Override
		protected Integer initialValue() {
			return new Integer(45);
		};

		@Override
		public Integer get() {
			return super.get();
		};
	};

	@Override
	public void run() {
		/*
		 * System.out.println("Thread executing task  is "+Thread.currentThread().
		 * getName()); System.out.println(employeeService);
		 * employeeService.insertProCall(new Random().nextInt(),new
		 * Date(),"sgreav",12558,1 ); System.out.println("Completed");
		 */
		
		System.out.println("Thread executing task  is " + Thread.currentThread().getName()+"task name is "+this.taskName);
		
		System.out.println(Thread.currentThread().getName()+" "+ScheduledExecutor.local.get());
		ScheduledExecutor.local.set(20);
		System.out.println(Thread.currentThread().getName()+" "+ScheduledExecutor.local.get());
	}

}
