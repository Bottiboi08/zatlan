// Define the correct name
const correctName = "Reema"; // Change this to your crush's name

// Get HTML elements
const nameInput = document.getElementById('name');
const submitNameBtn = document.getElementById('submit-name');
const nameSection = document.getElementById('name-section');
const questionSection = document.getElementById('question-section');
const questionText = document.getElementById('question-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Define the questions
const questions = [
    "Do you like me a little bit?",
    "So do you like me or love me?",
    "Berassmiii?",
    "Would you like to go on a date with me?"
];

let currentQuestionIndex = 0; // Track the current question

// Handle name submission
submitNameBtn.addEventListener('click', function() {
    const enteredName = nameInput.value.trim();
    
    if (enteredName.toLowerCase() === correctName.toLowerCase()) {
        nameSection.style.display = 'none';
        questionSection.style.display = 'block';
        questionText.textContent = questions[currentQuestionIndex];
    } else {
        alert("Sorry, that's not the right name!");
    }
});

// Handle Yes button click (proceed to next question)
yesBtn.addEventListener('click', function() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex];
    } else {
        questionText.textContent = "Thanks for answering all the questions!";
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }
});

// Handle No button click (randomly move the No button)
noBtn.addEventListener('click', function() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
