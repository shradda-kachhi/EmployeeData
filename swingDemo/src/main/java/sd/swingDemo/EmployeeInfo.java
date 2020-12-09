package sd.swingDemo;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import cc.models.Employee;
import sd.service.EmployeeDetailsService;

@Component("EmployeeInfo")
public class EmployeeInfo extends JFrame {
	@Autowired
	@Qualifier("employeeService")
	EmployeeDetailsService service;

	JTextField emp;
	JButton submit;
	JLabel label;

	public EmployeeInfo() {
		setVisible(true);
		setSize(500, 400);
		setLayout(new FlowLayout());
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		emp = new JTextField(10);
		submit = new JButton("Submit");
		label = new JLabel();
		
		somefun();

	}
	public void somefun()
	{
		add(emp);
		add(submit);
		add(label);
		submit.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				int v = Integer.parseInt(emp.getText());
				System.out.println(service);
				Employee emp = service.getEmpById(v);
				label.setText(emp.getName());
			}
		});
	}

}
