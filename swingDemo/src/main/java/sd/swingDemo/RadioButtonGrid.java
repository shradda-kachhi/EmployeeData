package sd.swingDemo;

import java.awt.FlowLayout;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

public class RadioButtonGrid extends JFrame {
public RadioButtonGrid() {
	setVisible(true);
	setSize(400,400);
	
	setLayout(new FlowLayout());
	JRadioButton male = new JRadioButton("Male");
	JRadioButton female = new JRadioButton("Female");
	
	ButtonGroup grp = new ButtonGroup();
	grp.add(female);
	grp.add(male);
	JButton button =new JButton("ok");
	JLabel label = new JLabel();
	
	JTextField field = new JTextField(20);

	JCheckBox check1= new JCheckBox("grdening");
	JCheckBox check2= new JCheckBox("sketching");
	
	button.addActionListener((e)->{String name = field.getText();
	if(male.isSelected())
		label.setText("MR. "+name+" greetings");
	else 
		label.setText("Ms "+name+" greetings" );
	});
	
	check1.addItemListener((i)->label.setText("gardener"));
	
	add(field);
	add(female);
	add(male);
	add(button);
	add(check1);
	add(check2);
	add(label);
	setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
}
}
