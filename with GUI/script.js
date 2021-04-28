    // **The COM: function which randomly returns Rock, Paper, or Scissors from an array,
    // array items are all caps to create consistency for comparison with user input**

    let computerHand = ["ROCK", "PAPER", "SCISSORS"];
    computerHandLength = computerHand.length;

    function computerPlay(){
        return computerHand[Math.floor(Math.random() * computerHandLength)];
            
    }
//  set initial score
    let computerScore = 0;
    let playerScore = 0;

    // plays a round, declares winner, adds score, and runs a score check
    function playRound(playerSelection, computerSelection){

        if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            alert ("You win! Rock beats Scissors.");
            playerScore = playerScore + 1;
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return playerScore;
        }else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
            computerScore = computerScore + 1; 
            alert ("You lose! Paper beats Rock");
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return computerScore;
        }else if (playerSelection === "ROCK" && computerSelection === "ROCK"){
            alert ("Tie!");
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
        }else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            alert ("You lose. Rock beats Scissors");
            computerScore = computerScore + 1;
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return computerScore;
        }else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            alert ("You win! Scissors beats Paper!");
            playerScore = playerScore + 1;
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return playerScore;
        }else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"){
            alert ("Tie!");
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
        }else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
            alert ("You win! Paper beats Rock!");
            playerScore = playerScore + 1; 
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return playerScore;
        }else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
            alert ("Tie!");
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
        }else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            alert ("You lose! Scissors beats Paper.");
            computerScore = computerScore + 1; 
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return computerScore;
        } else if (playerSelection === "poop" || playerSelection === "Poop" || playerSelection === "POOP"){
            alert ("WOO HOO!!!");
            playerScore = playerScore + 500000; 
            SCORE.textContent = 
            `Player score: ${playerScore} Opponent Score: ${computerScore}`;
            checkScore();
            return computerScore;

        }
    }  
    // score check function, declares a winner depending on who reaches 5 first
    function checkScore(){
        if (playerScore >= 5){
            console.log("You win! To play again, refresh the page.");
            } else if (computerScore >= 5){
                console.log("You lose! To play again, refresh the page.");
        } 
    }  
// functions to play each different hand, functions are attached to event listeners
    const ROCK = document.querySelector(".rock");
    const PAPER = document.querySelector(".paper");
    const SCISSORS = document.querySelector(".scissors");

    function playRock(){
        let playerSelection = "ROCK";
        let computerSelection = computerPlay().toUpperCase();
        playRound(playerSelection, computerSelection);
    }

    function playPaper(){
        let playerSelection = "PAPER";
        let computerSelection = computerPlay().toUpperCase();
        playRound(playerSelection, computerSelection);
    }

    function playScissors(){
        let playerSelection = "SCISSORS";
        let computerSelection = computerPlay().toUpperCase();
        playRound(playerSelection, computerSelection);
    }

    ROCK.addEventListener('click', playRock);
    PAPER.addEventListener('click', playPaper);
    SCISSORS.addEventListener('click', playScissors);

// set inital score display
    const SCORE = document.querySelector(".score");
    SCORE.textContent = 
    `Player score: ${playerScore} Opponent Score: ${computerScore}`;    

// reset game function
const RESET = document.querySelector('.reset');
RESET.addEventListener('click', resetGame);

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    SCORE.textContent = 
    `Player score: ${playerScore} Opponent Score: ${computerScore}`;
    console.clear();   
}
