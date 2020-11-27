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
		// default layout is CardLayout and it wll overwrite the label
		// there are grid flow and null
		setLayout(new FlowLayout());
		setVisible(true);
		setSize(300, 300);
		JLabel label = new JLabel("Hello WOrld");
		
		JTextField field1 = new JTextField(20);
		JTextField field2 = new JTextField(20);
		JButton button = new JButton("OK");
		JLabel result = new JLabel();
		
		ActionListener action = new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				result.setText(Integer.parseInt(field1.getText())+Integer.parseInt(field2.getText())+"");
				
			}
		};
		button.addActionListener(action);
		
		add(label);
		add(field1);
		add(field2);
		add(button);
		add(result);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		;
	}
}
