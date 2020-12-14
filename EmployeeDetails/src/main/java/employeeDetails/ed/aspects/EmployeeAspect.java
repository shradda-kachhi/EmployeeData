package employeeDetails.ed.aspects;



import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
@Component
@Aspect
public class EmployeeAspect {
Logger logger = LogManager.getLogger(EmployeeAspect.class);
	@Before( "execution(public void employeeDetails.ed.service.EmployeeServiceImp.*(..))")
	
	public void  beforeAdviceCheck()
	{
		logger.info("inside beforeAdviceCheck before insertProCall");
	}
}
