
// 1. Quiz Questions Array 
// Stores a minimum of 5 questions and their correct answers.
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: "mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Who is President of Russia?",
        answer: "Vladimir Putin"
    },
    {
        question: "Which language is used for web development?",
        answer: "javascript"
    },
    {
        question: "What is the square root of 81?",
        answer: "9"
    }
];

// 2. Function to Run the Quiz 
function runQuiz() {
    // Score Initialization 
    let score = 0;

    // Loop Through Questions 
    for (let i = 0; i < quizQuestions.length; i++) {
        
        const currentQuestion = quizQuestions[i].question;
        let userAnswer = prompt(currentQuestion);

        // Handle if user presses Cancel or closes the prompt (optional, for robustness)
        if (userAnswer === null) {
            alert("Quiz cancelled. Goodbye!");
            return; // Stop the quiz execution
        }

        // Normalize the Input 
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrectAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // Check the Answer and Update Score 
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            // Provide Immediate Feedback: Correct 
            alert("Correct!");
            score++;
        } else {
            // Provide Immediate Feedback: Wrong and show the correct answer 
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Display the Final Score 
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
    console.log(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// 3. Run the Quiz in the Browser Console 
runQuiz();