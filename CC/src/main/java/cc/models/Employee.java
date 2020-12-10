package cc.models;



import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class Employee implements Serializable {

public int id;

public String name;

public Date joining_date;

public double salary;


private HealthInsurance insurance;


private List<Mobile> mobileList = new ArrayList();

public HealthInsurance getInsurance() {
	return insurance;
}
public void setInsurance(HealthInsurance insurance) {
	this.insurance = insurance;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Date getJoining_date() {
	return joining_date;
}
public void setJoining_date(Date joining_date) {
	this.joining_date = joining_date;
}
public double getSalary() {
	return salary;
}
public void setSalary(double salary) {
	this.salary = salary;
}

public List<Mobile> getMobileList() {
	return mobileList;
}
public void setMobileList(List<Mobile> mobileList) {
	this.mobileList = mobileList;
}
@Override
public String toString() {
	return "Employee [id=" + id + ", name=" + name + ", joining_date=" + joining_date + ", salary=" + salary
			+ ", insurance=" + insurance + "]";
}

}
