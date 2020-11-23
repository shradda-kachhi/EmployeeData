package employeeDetails.ed.Service;

import employeeDetails.ed.Model.Laptop;
import employeeDetails.ed.exceptions.CustomCheckedException;

public interface LaptopService {
void saveLaptop(Laptop lap) throws CustomCheckedException;

void testSupport();

void testNever();

void testNotSupport();
}
