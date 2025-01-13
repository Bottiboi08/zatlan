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

// Function to move the No button to a random position
function moveNoBtnRandomly() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Set initial position of the No button next to the Yes button
function setInitialNoBtnPosition() {
    noBtn.style.position = 'relative';
    noBtn.style.left = '10px';
    noBtn.style.top = '0';
}

// Handle name submission
submitNameBtn.addEventListener('click', function() {
    const enteredName = nameInput.value.trim();
    
    if (enteredName.toLowerCase() === correctName.toLowerCase()) {
        nameSection.style.display = 'none';
        questionSection.style.display = 'block';
        questionText.textContent = questions[currentQuestionIndex];
        moveNoBtnRandomly(); // Move the No button randomly when the question section is shown
    } else {
        alert("Sorry, that's not the right name!");
    }
});

// Handle Yes button click (proceed to next question)
yesBtn.addEventListener('click', function() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex];
        setInitialNoBtnPosition(); // Reset the No button to its initial position
        moveNoBtnRandomly(); // Move the No button randomly for the next question
    } else {
        questionText.textContent = "AAAAAAAA3333333 YYEEEEYYYYYY";
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }
});

// Handle No button click and mouseover (randomly move the No button)
noBtn.addEventListener('click', moveNoBtnRandomly);
noBtn.addEventListener('mouseover', moveNoBtnRandomly);

// Set the initial position of the No button when the page loads
setInitialNoBtnPosition();
