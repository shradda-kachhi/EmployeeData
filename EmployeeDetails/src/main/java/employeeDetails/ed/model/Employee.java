package employeeDetails.ed.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
public class Employee {
@Id
@SequenceGenerator(initialValue =16,allocationSize = 1,name = "employee_seq",sequenceName = "employee_seq")
@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "employee_seq")
@Column(name = "employeeId")
public int id;
@Column
public String name;
@Column
@JsonFormat(pattern="dd/MM/yyyy")
public Date joining_date;
@Column
public double salary;


@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)//cascade require to ddls childs while only saving parent 
@JoinColumn(name="insurance")
@JsonIgnore
private HealthInsurance insurance;

@OneToMany(mappedBy = "allocatedTo" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)
@JsonIgnore
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
