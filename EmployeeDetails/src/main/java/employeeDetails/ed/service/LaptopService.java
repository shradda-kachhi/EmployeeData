package employeeDetails.ed.service;

import employeeDetails.ed.exceptions.CustomCheckedException;
import employeeDetails.ed.model.Laptop;

public interface LaptopService {
	void saveLaptop(Laptop lap) throws CustomCheckedException;

	void testSupport();

	void testNever();

	void testNotSupport();
	Laptop getLaptop(int id);
}
