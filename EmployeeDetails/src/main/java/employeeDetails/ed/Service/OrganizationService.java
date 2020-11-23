package employeeDetails.ed.Service;

import employeeDetails.ed.Model.Employee;
import employeeDetails.ed.Model.Laptop;
import employeeDetails.ed.exceptions.CustomCheckedException;

public interface OrganizationService {

	void saveEmployeeInfo(Employee emp, Laptop lap) throws CustomCheckedException;

	void callPropogationTypes();
}
