// Game State Variables
let randomNumber, attemptsRemaining, previousGuesses;
const maxGuesses = 10;
const guessInput = document.getElementById("guess");
const guessArrayDisplay = document.getElementById("guess_array");
const guessRemainingDisplay = document.getElementById("guess_remaining");
const messageDisplay = document.getElementById("error-popup");
guessRemainingDisplay.textContent = attemptsRemaining;
// Initialize Game
function initGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
    attemptsRemaining = maxGuesses;
    previousGuesses = [];
    guessInput.value = ''; // Clear the input field
    guessArrayDisplay.textContent = ''; // Clear previous guesses
    guessRemainingDisplay.textContent = attemptsRemaining;
    messageDisplay.textContent = '';
    messageDisplay.style.display = "none";
}

// Check Guess
// Check Guess
function checkGuess(e) {
    e.preventDefault();
    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage("Please enter a number between 1 and 100.", "red");
        return;
    }

    attemptsRemaining--;
    previousGuesses.push(guess);
    guessArrayDisplay.textContent = previousGuesses.join(", ");
    guessRemainingDisplay.textContent = attemptsRemaining;

    console.log(randomNumber);

    const difference = Math.abs(guess - randomNumber);

    if (guess === randomNumber) {
        displayMessage("Congratulations! You guessed it!", "green");
        guessInput.disabled = true;
    } else if (attemptsRemaining === 0) {
        guessInput.disabled = true;
        displayMessage(`Sorry, you're out of guesses! The number was ${randomNumber}.`, "red");
        setTimeout(initGame, 2000);
    } else {
        const distanceCategory = getDistanceCategory(difference);
        displayMessage(distanceCategory, getDistanceColor(difference));
    }

    function getDistanceCategory(difference) {
        if (difference <= 5) {
            return "You're scorching hot!";
        } else if (difference <= 10) {
            return "You're getting very warm!";
        } else if (difference <= 20) {
            return "You're getting warmer.";
        } else if (difference <= 50) {
            return "You're lukewarm.";
        } else {
            return "You're cold!";
        }
    }

    function getDistanceColor(difference) {
        if (difference <= 5) {
            return "red";
        } else if (difference <= 10) {
            return "darkorange";
        } else if (difference <= 20) {
            return "orange";
        } else if (difference <= 50) {
            return "yellow";
        } else {
            return "lightblue";
        }
    }



}


// Display Message (in popup)
function displayMessage(text, color) {
    messageDisplay.textContent = text;
    messageDisplay.style.backgroundColor = color;
    messageDisplay.style.display = "block";
}

// Event Listeners
document.querySelector('form').addEventListener('submit', checkGuess);

// Initialize the game on page load
initGame();
