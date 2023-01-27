let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function game() {

    for (let i = 1; i <= 5; ++i) {
        playRound(i)
    }
roundDecider();
}

function playRound (round) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundInfo(playerSelection, computerSelection, round);
        console.log('Tie')
        console.log("--------------------------");
    } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper")
    ) {
        playerScore++
        roundInfo(playerSelection, computerSelection, round);
        console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`);
        console.log("--------------------------");
    } else {
        computerScore++
        roundInfo(playerSelection, computerSelection, round);
        console.log(`Player Loses! ${playerSelection} loses to ${computerSelection}`);
        console.log("--------------------------");
    }
    return playerSelection;
    return computerSelection;
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

    function roundDecider() {
        if (playerScore > computerScore) {
            console.log("The Player has won!");
        }
        if (playerScore < computerScore) {
            console.log("The Player has lost!");
        }

        else if (playerScore == computerScore) {
            console.log("The player and computer tied");
        }
        console.log(`Player end score: ${playerScore}`);
        console.log(`Computer end score: ${computerScore}`);
        console.log("============================");

    }

    function roundInfo(playerSelection, computerSelection, round) {
        //console.log("--------------------------");
        console.log(`Round: ${round}`);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer Chose: ${computerSelection}`);
    }