package employeeDetails.ed.Service;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import employeeDetails.ed.Dao.EmployeeDao;
import employeeDetails.ed.Model.Employee;

@Service("employeeService")
@Transactional
public class EmployeeServiceImp implements EmployeeService {
@Autowired
EmployeeDao employeeDao;
@Autowired
ModelMapper modelMapper;


public int saveEmployee(Employee emp)
{
	return employeeDao.saveEmployee(emp);
}

public List<Employee> getEmployeeList()
{
	return employeeDao.getAllEmployee();
}

public cc.models.Employee getEmployee(int id)
{
	
	Employee empEntity= employeeDao.getEmployee(id);
	cc.models.Employee emloyeModel=modelMapper.map(empEntity, cc.models.Employee.class);
	return emloyeModel;
}

public Employee updateEmployee(Employee emp)
{
	return employeeDao.updateEmployee(emp);
}

public List<Employee> getEmployee(String startWith)
{
	return employeeDao.getEmployee(startWith);
}

public List<Employee> getEmployee(Date startDate,Date endDate)
{
	return employeeDao.getEmployee(startDate,endDate);
}
public List<Employee> getMaxSalaryEmployee(){
	return employeeDao.getMaxSalaryEmployee();
}
public Employee getEmployeeUseFetch(int emp)
{
	return employeeDao.getEmployeeUseFetch(emp);
}

@Override
public Employee getEmployeeUseFetch() {
	
	Employee emp= employeeDao.getEmployeeUseFetch();
	System.out.println(emp.getInsurance().getInsuranceTyep());
	emp.getMobileList().forEach(i->System.out.println(i.getMobileBrand()));
	return emp;
}

@Override
public void insertProCall() {
	employeeDao.insertEMpProcedure();
	
}

}
