package employeeDetails.ed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HealthInsurance {
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer insuranceNumber;
@Column
private String insuranceTyep;
public Integer getInsuranceNumber() {
	return insuranceNumber;
}
public void setInsuranceNumber(Integer insuranceNumber) {
	this.insuranceNumber = insuranceNumber;
}
public String getInsuranceTyep() {
	return insuranceTyep;
}
public void setInsuranceTyep(String insuranceTyep) {
	this.insuranceTyep = insuranceTyep;
}

}
