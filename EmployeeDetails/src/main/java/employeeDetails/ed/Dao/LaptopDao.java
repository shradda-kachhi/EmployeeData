package employeeDetails.ed.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import employeeDetails.ed.Model.Laptop;

@Repository
public class LaptopDao {

	@Autowired
	SessionFactory seeFactory;
	public int saveLaptop(Laptop lap) {
		return 	 (int) getSession().save(lap);
	
	}

	private Session getSession() {
		return seeFactory.getCurrentSession();
	}
}
