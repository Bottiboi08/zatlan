import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.File;
import java.io.IOException;
import javax.swing.text.html.HTMLDocument;
import javax.swing.text.html.HTMLEditorKit;
import java.util.Random;

public class CrushApp {
    private static JFrame frame;
    private static JPanel panel;
    private static JTextField nameField;
    private static JButton submitButton;
    private static JLabel questionLabel;
    private static JButton yesButton;
    private static JButton noButton;
    private static String correctName = "Hsan";  // Change this to your crush's name

    public static void main(String[] args) {
        // Set up frame
        frame = new JFrame("Crush App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        // Set the layout
        panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        
        // Name Input Panel
        nameField = new JTextField();
        nameField.setPreferredSize(new Dimension(200, 30));
        submitButton = new JButton("Submit");

        submitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String enteredName = nameField.getText();
                if (enteredName.equalsIgnoreCase(correctName)) {
                    showQuestions();
                } else {
                    JOptionPane.showMessageDialog(frame, "Sorry, that's not the right name!");
                }
            }
        });

        panel.add(new JLabel("Enter your name:"));
        panel.add(nameField);
        panel.add(submitButton);
        
        // Initial question components (hidden initially)
        questionLabel = new JLabel("Ready for a question?");
        yesButton = new JButton("Yes");
        noButton = new JButton("No");

        panel.add(questionLabel);
        panel.add(yesButton);
        panel.add(noButton);
        
        // Set visibility to false until the right name is typed
        questionLabel.setVisible(false);
        yesButton.setVisible(false);
        noButton.setVisible(false);

        // Randomize No Button position
        noButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                Random rand = new Random();
                int x = rand.nextInt(frame.getWidth() - noButton.getWidth());
                int y = rand.nextInt(frame.getHeight() - noButton.getHeight());
                noButton.setLocation(x, y);
            }
        });

        // Yes Button action
        yesButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                askNextQuestion();
            }
        });

        // Set the panel to the frame
        frame.add(panel);
        frame.setVisible(true);
    }

    public static void showQuestions() {
        // Hide the name input and submit button
        nameField.setVisible(false);
        submitButton.setVisible(false);

        // Show the question interface
        questionLabel.setVisible(true);
        yesButton.setVisible(true);
        noButton.setVisible(true);
    }

    public static void askNextQuestion() {
        // Set the next question after a Yes response
        questionLabel.setText("Do you like me?");
        
        // After the question, wait for a new Yes click to proceed
        yesButton.setText("Yes");
        noButton.setText("No");
    }
}
