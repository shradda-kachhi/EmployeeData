package employeeDetails.ed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EmployeeLaptop")
public class Laptop {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int lapId;
	@Column
	private String assetBrand;

	
	
	public int getLapId() {
		return lapId;
	}

	public void setLapId(int lapId) {
		this.lapId = lapId;
	}

	public String getAssetBrand() {
		return assetBrand;
	}

	public void setAssetBrand(String assetBrand) {
		this.assetBrand = assetBrand;
	}

	@Override
	public String toString() {
		return "Laptop [LapId=" + lapId + ", assetBrand=" + assetBrand + "]";
	}

}
