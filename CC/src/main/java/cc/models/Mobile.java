package cc.models;

import java.io.Serializable;

public class Mobile implements Serializable {

	
	private Long mobileId;

	private String mobileBrand;

	private Employee allocatedTo;
	public Long getMobileId() {
		return mobileId;
	}
	public void setMobileId(Long mobileId) {
		this.mobileId = mobileId;
	}
	public String getMobileBrand() {
		return mobileBrand;
	}
	public void setMobileBrand(String mobileBrand) {
		this.mobileBrand = mobileBrand;
	}
	public Employee getAllocatedTo() {
		return allocatedTo;
	}
	public void setAllocatedTo(Employee allocatedTo) {
		this.allocatedTo = allocatedTo;
	}

}
