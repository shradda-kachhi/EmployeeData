package employeeDetails.ed.Service;

import employeeDetails.ed.Model.Employee;

public interface RemoteServerInterface {
 public String sayHelloWorld();
 public Employee remoteGetEmployee(int id);
}
