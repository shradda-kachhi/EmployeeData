package cc.models;

import java.io.Serializable;

public class HealthInsurance implements Serializable {

private Integer insuranceNumber;

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
