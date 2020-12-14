package employeeDetails.ed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "employeeMobile")
public class Mobile {

	@Id
	@GeneratedValue
	private Long mobileId;
	@Column
	private String mobileBrand;
	@ManyToOne(targetEntity =Employee.class )
	@JoinColumn(name = "employeeId")
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
