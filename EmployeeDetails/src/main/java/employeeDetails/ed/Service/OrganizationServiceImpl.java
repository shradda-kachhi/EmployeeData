package employeeDetails.ed.Service;

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
	public void saveEmployeeInfo(Employee emp ,Laptop lap) throws CustomCheckedException {
		employeeService.saveEmployee(emp);
		try {
			laptopService.saveLaptop(lap);
		} catch (CustomCheckedException e) {
		System.out.println(e.getMessage());
		throw e;//shouldnt be handled here otherwise employee tabe will be upbdated
		}
	
		
	}
	@Override
	@Transactional
	public void callPropogationTypes()
	{
		laptopService.testSupport();//it will not give error 
		//laptopService.testNever();//it will give error
		laptopService.testNotSupport();//always create new transaction
	}

}
