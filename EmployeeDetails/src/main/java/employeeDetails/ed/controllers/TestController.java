package employeeDetails.ed.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import employeeDetails.ed.exceptions.CustomCheckedException;
import employeeDetails.ed.model.Employee;
import employeeDetails.ed.model.Laptop;
import employeeDetails.ed.service.EmployeeService;
import employeeDetails.ed.service.LaptopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	@Autowired
	@Qualifier("employeeService")
	EmployeeService employeeService;

	@Autowired
	@Qualifier("LaptopService")
	LaptopService laptopService;

	@RequestMapping(value = "test", method = RequestMethod.GET)
	public String test() {
		return "hello World";
	}

	@RequestMapping(value = "employee", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	public Employee getEmployee(@RequestParam int id) {
		return employeeService.getEmployeeEntity(id);
	}

	@RequestMapping(value = "addEmployee", method = RequestMethod.POST, headers = "Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	public int getEmployee(@RequestBody Employee empl) {
		return employeeService.saveEmployee(empl);
	}

	@RequestMapping(value = "employeeList", method = RequestMethod.GET, headers = "Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody

	public List<Employee> listEmployee() {
		return employeeService.getEmployeeList();
	}

	@RequestMapping(value = "laptop", method = RequestMethod.POST, headers = "Accept=application/json", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void saveLaptop(@RequestBody Laptop lap) {
		try {
			laptopService.saveLaptop(lap);
		} catch (CustomCheckedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "getLaptop", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)

	@ResponseBody
	public Laptop getLaptopById(@RequestParam int id) {

		return laptopService.getLaptop(id);
	}
}
