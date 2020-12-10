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
import sd.AppClient;

public class EmployeeInfo extends JFrame {

	JTextField emp;
	JButton submit;
	JLabel labelName, labelSalary;

	public EmployeeInfo() {

		somefun();

	}

	public void somefun() {
		setVisible(true);
		setSize(500, 400);
		setLayout(new FlowLayout());
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		emp = new JTextField(10);
		submit = new JButton("Submit");
		labelName = new JLabel();
		labelSalary = new JLabel();

		add(emp);
		add(submit);
		add(labelName);
		add(labelSalary);
		submit.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				int v = Integer.parseInt(emp.getText());

				

Employee emp=new AppClient().getEmployeeInfo(v);
				  labelName.setText(emp.getName());
				  labelSalary.setText(emp.getSalary()+"")
				 ;
			}
		});
	}

}
