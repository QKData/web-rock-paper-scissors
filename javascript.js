// Get computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else return "scissors";
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(humanChoice, computerChoice) {
    // Validate human input
    if (!["rock", "paper", "scissors"].includes(humanChoice)) {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }

    // Check for tie
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    // Define winning combinations
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // Determine winner and update score
    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Function to update the display
function updateDisplay(result) {
    const resultDiv = document.querySelector('#result');
    const scoreDiv = document.querySelector('#score');
    
    if (resultDiv && scoreDiv) {
        resultDiv.textContent = result;
        scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}

// Set up button event listeners
function initializeGame() {
    const buttons = document.querySelectorAll('.choice-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            updateDisplay(result);
            
            // Check if game should end
            if (humanScore >= 5 | computerScore >= 5) {
                endGame();
            }
        });
    });
}

// Function to end the game
function endGame() {
    const resultDiv = document.querySelector('#result');
    const buttons = document.querySelectorAll('.choice-btn');
    
    // Disable buttons
    buttons.forEach(button => button.disabled = true);
    
    // Display final result
    let finalMessage = "\nGame Over! ";
    if (humanScore > computerScore) {
        finalMessage += `You win the game! Final score: ${humanScore}-${computerScore}`;
    } else if (computerScore > humanScore) {
        finalMessage += `Computer wins the game! Final score: ${computerScore}-${humanScore}`;
    } else {
        finalMessage += `It's a tie! Final score: ${humanScore}-${computerScore}`;
    }
    
    if (resultDiv) {
        resultDiv.textContent = finalMessage;
    }
    
    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    
    // Re-enable choice buttons
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => button.disabled = false);
    
    // Clear displays
    updateDisplay('Choose your weapon!');
    
    // Remove reset button
    const resetButton = document.querySelector('button:not(.choice-btn)');
    if (resetButton) {
        resetButton.remove();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame);