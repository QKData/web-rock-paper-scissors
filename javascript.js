// Write the logic to get the computer choice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return computerChoice = "rock";
    } else if (computerChoice === 1) {
        return computerChoice = "paper";
    } else return computerChoice = "scissors";
}

// Write the logic to get the human choice
function getHumanChoice () {
    let humanChoice = prompt("Please choose: Rock, Paper or Scissors");
    return humanChoice = humanChoice.toLowerCase();
}

// Declare the players score variables
humanScore = 0;
computerScore = 0;

// Write the logic to play a single round
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

// Play full game
function game(rounds = 5) {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine final winner
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: ${computerScore}-${humanScore}`);
    } else {
        console.log(`It's a tie! Final score: ${humanScore}-${computerScore}`);
    }
}