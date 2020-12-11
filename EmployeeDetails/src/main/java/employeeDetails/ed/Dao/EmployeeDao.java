package employeeDetails.ed.Dao;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.type.DateType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import employeeDetails.ed.Model.Employee;


@Repository

public class EmployeeDao {
	@Autowired
	SessionFactory seeFactory;

	@SuppressWarnings("unchecked")
	public List<Employee> getAllEmployee() {
		return getSession().createQuery("from Employee").list();
	}

	private Session getSession() {
		/*
		 * if we try to open an new session it would not work because it will not be
		 * handled by transactional it will be complete diffrent session and than you
		 * have to explicitly close and commit but of you use getCurrent sessios it is
		 * by default thread and it will take care of commit
		 */
		return seeFactory.getCurrentSession();

	}

	public int saveEmployee(Employee emp) {
		return (int) getSession().save(emp);

	}

	public Employee getEmployeeUseFetch(int id) {
		Query query = getSession().createQuery("from Employee a join fetch a.insurance where a.id=" + id);
		Employee ep = (Employee) query.uniqueResult();
		System.out.println("inside Dao " + ep.getInsurance().getInsuranceTyep());
		return ep;

	}

	public Employee getEmployeeUseFetch() {
		Query query = getSession().createQuery("from Employee e join fetch e.mobileList where e.id=1");
		Employee ep = (Employee) query.uniqueResult();
		// System.out.println("inside Dao "+ep.getInsurance().getInsuranceTyep());

		return ep;

	}

	public Employee getEmployee(int id) {
		Employee employee = (Employee) getSession().get(Employee.class, id);
		return employee;
	}

	public Employee updateEmployee(Employee emp) {
		getSession().update(emp);
		return getEmployee(emp.getId());
	}

	public List<Employee> getEmployee(String start) {
		Criteria criteria = getSession().createCriteria(Employee.class);
		criteria.add(Restrictions.ilike("name", start + "%"));
		return criteria.list();

	}

	public List<Employee> getEmployee(Date startDate, Date endDate) {
		Criteria criteria = getSession().createCriteria(Employee.class);
		criteria.add(Restrictions.between("joining_date", startDate, endDate));
		return criteria.list();

	}

	public List<Employee> getMaxSalaryEmployee() {
		SQLQuery query = getSession()
				.createSQLQuery("select * from employee where salary=(select max(salary) from employee)");

		query.addEntity(Employee.class);
		return query.list();
	}
	public void insertEMpProcedure(int id, Date doj, String nme, int sal, int lapid) {
		SimpleDateFormat formaat = new SimpleDateFormat("yyyy-mm-dd");
		System.out.println(doj);
		SQLQuery qury = getSession().createSQLQuery("select public.insertmeployee(:empId,:joiningDate \\:\\: date,:name,:salary,:laptopId)");
		qury.setParameter("empId", id);
		qury.setParameter("joiningDate","January 8, 2202" );
		qury.setParameter("name", nme);
		qury.setParameter("salary", sal);
		qury.setParameter("laptopId", lapid);

		qury.uniqueResult();
		
	}

}
