## 📝 Prompt Quizzer – A Console-Based Quiz Game

This project, named **Prompt Quizzer**, is a simple JavaScript quiz game designed to execute entirely within the browser's console. It fulfills the requirements for **Web Dev I Lab Assignment 4** and focuses on reinforcing core JavaScript concepts like arrays, loops, conditionals, and basic input/output.

### 💻 Core Features

* **Predefined Questions**: The game uses a predefined set of questions and corresponding answers stored in an array of objects (`quizQuestions`). A minimum of 5 questions are included.
* **Structured Logic**: All quiz logic is contained within the `runQuiz()` function.
* **Iterative Questioning**: A `for` loop is used to loop through each question systematically.
* **User Interaction**: The program prompts the user for input with `prompt()` and provides immediate feedback using `alert()`.
* **Robust Input Handling**: User input is processed using `toLowerCase()` and `trim()` to ensure accurate comparison regardless of case or extra spaces.
* **Score Tracking**: The program keeps track of the user’s score throughout the quiz.
* **Final Result**: The final score is displayed via an `alert()` at the end of the quiz.

### 🚀 How to Run the Quiz

1.  **Open the File**: Ensure you have the `quiz.js` file content (the provided JavaScript code).
2.  **Open Browser Console**: In your web browser (Chrome, Firefox, Edge, etc.), open the Developer Tools (usually by pressing **F12**).
3.  **Navigate to Console**: Click on the **Console** tab.
4.  **Paste and Execute**: Paste the entire content of the `quiz.js` file into the console and press **Enter**.
5.  **Play**: Answer each prompt, view the feedback alerts, and check the final score.

### 🛠️ Submission Details

* **File Name**: `quiz.js`
* **Repository**: [\[Link to the GitHub Repository\]](https://github.com/lucky-KRMU/Lab-Assignment-KRMU-Web-Dev-1)
* **Faculty Submission**: The GitHub repository link is to be shared with the faculty.

### 💡 Potential Improvements

The following improvements or adjustments could be made to enhance the game:

* Add more questions to increase the challenge and variety.
* Include multiple-choice options instead of only text input.
* Implement a timer for each question.
* Customize feedback messages with hints for incorrect answers.
* Store high scores in the browser using local storage.
* Add a restart option or score-based messages.