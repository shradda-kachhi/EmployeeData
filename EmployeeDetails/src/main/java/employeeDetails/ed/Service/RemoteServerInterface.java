package employeeDetails.ed.Service;

import cc.models.Employee;

public interface RemoteServerInterface {
 public String sayHelloWorld();
 public Employee remoteGetEmployee(int id);
}
