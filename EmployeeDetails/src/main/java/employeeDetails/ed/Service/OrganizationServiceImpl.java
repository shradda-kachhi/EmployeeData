package employeeDetails.ed.Service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import employeeDetails.ed.Model.Employee;
import employeeDetails.ed.Model.Laptop;
import employeeDetails.ed.exceptions.CustomCheckedException;

@Service("OrganizationService")
public class OrganizationServiceImpl implements OrganizationService {
	@Autowired
	LaptopService laptopService;
	@Autowired
	EmployeeService employeeService;

	@Override
	@Transactional(rollbackFor = CustomCheckedException.class)
	public void saveEmployeeInfo(Employee emp, Laptop lap) throws CustomCheckedException {
		employeeService.saveEmployee(emp);
		try {
			laptopService.saveLaptop(lap);
		} catch (CustomCheckedException e) {
			System.out.println(e.getMessage());
			throw e;// shouldnt be handled here otherwise employee tabe will be upbdated
		}

	}

	@Override
	@Transactional
	public void callPropogationTypes()

	{
		Employee emp = new Employee();
		emp.setName("cfdgt");
		emp.setSalary(1000);
		emp.setJoining_date(new Date());
		employeeService.saveEmployee(emp);
		// if error is thrown that it will be rollbacked for uncheccked exceptions
		//but for checked we have to use rollbackfor otherwise haf transaction would be committed
	//	laptopService.testSupport();// it will not give error
		 laptopService.testNever();//it will give error
		//laptopService.testNotSupport();// always create new transaction
	}

}
