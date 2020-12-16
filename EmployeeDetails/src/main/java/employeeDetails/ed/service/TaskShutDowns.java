package employeeDetails.ed.service;

import java.time.LocalDateTime;
import java.util.concurrent.Callable;

import org.springframework.stereotype.Component;
@Component("taskshut")
public class TaskShutDowns implements Callable<String> {

	String taskName;

	public TaskShutDowns() {
		
	}

	
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}


	@Override
	public String call() throws Exception {
		System.out.println(
				"Thread  is " + Thread.currentThread().getName() + "task name is " +
		this.taskName+" executed on"+ LocalDateTime.now().toString());

		return taskName +" is completed";

	}

}
