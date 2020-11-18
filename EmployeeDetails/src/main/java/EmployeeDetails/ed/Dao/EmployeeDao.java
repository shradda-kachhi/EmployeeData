package EmployeeDetails.ed.Dao;

import java.util.ArrayList;
import java.util.List;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import EmployeeDetails.ed.Model.Employee;

@Repository
public class EmployeeDao {
 @Autowired
 SessionFactory seeFactory;
	@SuppressWarnings("unchecked")
	public List<Employee> getAllEmployee(){
		return (ArrayList<Employee>) getSession().createQuery("from Employee").list();
	}
	private Session getSession() {
		return seeFactory.openSession();
		
	}
	public int saveEmployee(Employee emp) {
		Session session =getSession();
		Transaction trans =session.beginTransaction();
		int id =(int)session.save(emp);
		trans.commit();
		session.close();
		return id;
		
	}
	public Employee getEmployee(int id)
	{
		Session session =getSession();
		Transaction trans =session.beginTransaction();
		Employee emp =(Employee)session.get(Employee.class, id);
		trans.commit();
		session.close();
		return emp;
	}
}