package remoteClient.model;

import java.io.Serializable;

public class Laptop implements Serializable {

	private int lapId;

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
