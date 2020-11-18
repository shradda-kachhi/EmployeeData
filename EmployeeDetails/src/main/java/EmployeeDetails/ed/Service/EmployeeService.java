package EmployeeDetails.ed.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EmployeeDetails.ed.Dao.EmployeeDao;
import EmployeeDetails.ed.Model.Employee;

@Service("employeeService")
public class EmployeeService {
@Autowired
EmployeeDao employeeDao;

public int saveEmployee(Employee emp)
{
	return employeeDao.saveEmployee(emp);
}
}
