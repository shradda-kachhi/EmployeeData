package swingDemo;

import java.awt.FlowLayout;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.*;

public class MouseLsten extends JFrame {
	public MouseLsten() {
		setVisible(true);
		setSize(500,500);
		setLayout(new FlowLayout());
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		  JLabel lb = new JLabel("this is label");
		addMouseListener(new MouseAdapter() {
			  public void mouseClicked(MouseEvent e) {
				lb.setText(e.getPoint().toString());
			  }
		});
		add(lb);
	}
}
