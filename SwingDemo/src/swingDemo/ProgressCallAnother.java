package swingDemo;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JProgressBar;
import javax.swing.Timer;

public class ProgressCallAnother extends JFrame implements ActionListener{
	JProgressBar progres ;
	int i = 0;
public ProgressCallAnother() {
	setVisible(true);
	setSize(500,500);
	setLayout(new FlowLayout());
	setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	  JLabel lb = new JLabel("this is label");
	  JButton b = new JButton();
	   progres = new JProgressBar(0,25);
	  Timer time = new Timer(1000,this);
	  add(lb);
	  add(progres);
	  add(b);
	  b.addActionListener((l)-> time.start());
	
}

@Override
public void actionPerformed(ActionEvent e) {
	if(i==5) {
		new MouseLsten();
		dispose();
	}i++;
	progres.setValue(i);
	
}
}
