package employeeDetails.ed.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import employeeDetails.ed.dao.LaptopDao;
import employeeDetails.ed.exceptions.CustomCheckedException;
import employeeDetails.ed.model.Laptop;

@Service("LaptopService")
public class LaptopServiceImpl implements LaptopService {
	@Autowired
	LaptopDao laptopDao;
	
	
	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public void saveLaptop(Laptop lap) throws CustomCheckedException {
		System.out.println("Mandatory requires existing transaction otherwise throws illegal transaction exception");
		throw new CustomCheckedException("checked exception if thrown then to rollback entire transcation rollbackFor should be used");
		//laptopDao.saveLaptop(lap);
	}

	@Override
	@Transactional(propagation = Propagation.SUPPORTS)
	public void testSupport() {
		System.out.println("Support will use existing transaction if available otherwise will run without transaction");
	}
	
	@Override
	@Transactional(propagation = Propagation.NEVER)
	public void testNever() {
		System.out.println("Never will never use any transaction if called from transactional it will throw illegal transaction exception");
	}
	
	@Override
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public void testNotSupport()
	{
		System.out.println("Not Supported will always run without transaction");
	}
}
