let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('input')

function game() {    
    playRound()
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    let outputResult = ''

    if (playerSelection === computerSelection) {
        outputResult = (`
        Tie, both the player and the computer chose ${playerSelection}` +
        "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
    } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper")
    ) {
        playerScore++
        outputResult = (`
        Player Wins! ${playerSelection} beats ${computerSelection}` +
        "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore)

        if (playerScore == 5) {
            outputResult += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    } else {
        computerScore++
        outputResult = (`
        Player Loses! ${playerSelection} loses to ${computerSelection}` +
        "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore)

        if (computerScore == 5) {
            outputResult += '<br><br>The computer won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('outputResult').innerHTML = outputResult
    return playerSelection;
}

function getComputerChoice(computerChoice) {
    const computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {
        computerChoice = 'rock';
    }
    else if (computerSelection === 2) {
        computerChoice = 'paper';
    }
    else if (computerSelection === 3) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getPlayerChoice(playerChoice) {
    while (true) {
        let input = prompt("Please choose rock, paper or scissors: ");

        while (input == null) {
            input = prompt("Please choose rock, paper or scissors: ");
        }
        input = input.toLowerCase();

        if (input === 'rock') {
            playerChoice = 'rock';
            break;
        }

        else if (input === 'paper') {
            playerChoice = 'paper';
            break;
        }

        else if (input === 'scissors') {
            playerChoice = 'scissors';
            break;
        }

        else {  
            console.log("Player input invalid. Please enter rock, paper or scissors");
        }
    }
    return playerChoice;
}
 

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})