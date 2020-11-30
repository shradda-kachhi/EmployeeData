package swingDemo;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class HelloFrame extends JFrame {

	public HelloFrame() {
		// default layout is CardLayout and it will overwrite the label
		// there are grid flow and null
		setLayout(new FlowLayout());
		setVisible(true);
		setSize(400, 400);
		JLabel label = new JLabel("Hello WOrld");
		
		JTextField field1 = new JTextField(20);
		JTextField field2 = new JTextField(20);
		JButton button1 = new JButton("Add");
		JButton button2 = new JButton("SUbtract");
		
		JLabel result = new JLabel();
		
		ActionListener action = ( e) ->	result.setText(Integer.parseInt(field1.getText())+Integer.parseInt(field2.getText())+"");
		
		ActionListener action2 = ( e) ->	result.setText(Integer.parseInt(field1.getText())-Integer.parseInt(field2.getText())+"");
		button1.addActionListener(action);
		
		button2.addActionListener(action2);
		
		add(label);
		add(field1);
		add(field2);
		add(button1);
		add(button2);
		add(result);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		;
	}
}
