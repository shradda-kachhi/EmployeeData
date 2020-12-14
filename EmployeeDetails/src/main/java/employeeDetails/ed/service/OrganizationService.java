package employeeDetails.ed.service;

import employeeDetails.ed.exceptions.CustomCheckedException;
import employeeDetails.ed.model.Employee;
import employeeDetails.ed.model.Laptop;

public interface OrganizationService {

	void saveEmployeeInfo(Employee emp, Laptop lap) throws CustomCheckedException;

	void callPropogationTypes();
}
