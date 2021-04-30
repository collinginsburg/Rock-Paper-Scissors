    
    
    
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
    let roundWin;

    // set initial score display

    const playerScoreboard = document.querySelector('.pscoreNum');
    playerScoreboard.textContent = `PLAYER: ${playerScore}`;
    const computerScoreboard = document.querySelector('.cscoreNum');
    computerScoreboard.textContent = `COM: ${computerScore}`;



    // plays a round, declares winner, adds score, displays correct hands, and runs a score check
    function playRound(playerSelection, computerSelection){

        if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            // alert ("You win! Rock beats Scissors.");
            roundWin = true;
            playerScore = playerScore + 1;
            computerScoreboard.textContent = `COM: ${computerScore} LOSE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} WIN!`;
            displayPlayerRock();
            displayComputerScissors();
            playerRock.style.cssText = ('fill:green; display:block');
            checkScore();
            return playerScore;

        }else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
            computerScore = computerScore + 1; 
            // alert ("You lose! Paper beats Rock");
            computerScoreboard.textContent = `COM: ${computerScore} WIN!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} LOSE!`;
            displayPlayerRock();
            displayComputerPaper();
            playerRock.style.cssText = ('fill:red; display:block');
            checkScore();
            return computerScore;

        }else if (playerSelection === "ROCK" && computerSelection === "ROCK"){
            // alert ("Tie!");
            computerScoreboard.textContent = `COM: ${computerScore} TIE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} TIE!`;
            displayPlayerRock();
            displayComputerRock();
            playerRock.style.cssText = ('fill:black; display:block');
            checkScore();

        }else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            // alert ("You lose. Rock beats Scissors");
            computerScore = computerScore + 1;
            computerScoreboard.textContent = `COM: ${computerScore} WIN!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} LOSE!`;
            displayPlayerScissors();
            displayComputerRock();
            playerScissors.style.cssText = ('fill:red; display:block');
            checkScore();
            return computerScore;

        }else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            // alert ("You win! Scissors beats Paper!");
            roundWin = true;
            playerScore = playerScore + 1;
            computerScoreboard.textContent = `COM: ${computerScore} LOSE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} WIN!`;
            checkScore();
            displayPlayerScissors();
            displayComputerPaper();
            playerScissors.style.cssText = ('fill:green; display:block');
            return playerScore;

        }else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"){
            // alert ("Tie!");
            computerScoreboard.textContent = `COM: ${computerScore} TIE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} TIE!`;
            displayPlayerScissors();
            displayComputerScissors();
            playerScissors.style.cssText = ('fill:black; display:block');
            checkScore();

        }else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
            // alert ("You win! Paper beats Rock!");
            roundWin = true;
            playerScore = playerScore + 1; 
            computerScoreboard.textContent = `COM: ${computerScore} LOSE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} WIN!`;
            displayPlayerPaper();
            displayComputerRock();
            playerPaper.style.cssText = ('fill:green; display:block');
            checkScore();

            return playerScore;
        }else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
            // alert ("Tie!");
            computerScoreboard.textContent = `COM: ${computerScore} TIE!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} TIE!`;
            displayPlayerPaper();
            displayComputerPaper();
            playerPaper.style.cssText = ('fill:black; display:block');
            checkScore();

        }else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            // alert ("You lose! Scissors beats Paper.");
            computerScore = computerScore + 1; 
            computerScoreboard.textContent = `COM: ${computerScore} WIN!`;
            playerScoreboard.textContent = `PLAYER: ${playerScore} LOSE!`;
            displayPlayerPaper();
            displayComputerScissors();
            playerPaper.style.cssText = ('fill:red; display:block');
            checkScore();

            return computerScore;
        } else if (playerSelection === "poop" || playerSelection === "Poop" || playerSelection === "POOP"){
            alert ("WOO HOO!!!");
            playerScore = playerScore + 500000; 
            computerScoreboard.textContent = `Computer: ${computerScore}`;
            playerScoreboard.textContent = `Player: ${playerScore}`;
            checkScore();

            return computerScore;

        }
    }  
    // score check function, displays winner w/ new screen
    let mainscreen = document.querySelector('.contentwrapper');
    let gameover = document.querySelector('.resetModal');
    let gameovertext = document.querySelector('.gameovertext');
    let playagaincolor = document.querySelector('.playagain');
    
    function checkScore(){
        if (playerScore >= 5){
                mainscreen.classList.add('disappear');
                gameover.classList.remove('disappear');
                gameovertext.textContent = "You won!!! Holy shit...";
                playagaincolor.style.cssText = "background-color: green;"
            } else if (computerScore >= 5){
                mainscreen.classList.add('disappear');
                gameover.classList.remove('disappear');
                gameovertext.textContent = "You lost to a COMPUTER. What a shame...";
                playagaincolor.style.cssText = "background-color: red;"
                
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

        ROCK.removeEventListener('click', playRock);
        PAPER.removeEventListener('click', playPaper);
        SCISSORS.removeEventListener('click', playScissors);

        displayNextRound();
    }

    function playPaper(){
        let playerSelection = "PAPER";
        let computerSelection = computerPlay().toUpperCase();
        playRound(playerSelection, computerSelection);

        ROCK.removeEventListener('click', playRock);
        PAPER.removeEventListener('click', playPaper);
        SCISSORS.removeEventListener('click', playScissors);

        displayNextRound();
    }

    function playScissors(){
        let playerSelection = "SCISSORS";
        let computerSelection = computerPlay().toUpperCase();
        playRound(playerSelection, computerSelection);

        ROCK.removeEventListener('click', playRock);
        PAPER.removeEventListener('click', playPaper);
        SCISSORS.removeEventListener('click', playScissors);

        displayNextRound();
    }

    setTimeout(function(){ROCK.addEventListener('click', playRock);}, 1700);
    setTimeout(function(){PAPER.addEventListener('click', playPaper);}, 1700);
    setTimeout(function(){SCISSORS.addEventListener('click', playScissors);}, 1700);




// reset game function
const RESET = document.querySelector('.reset');
RESET.addEventListener('click', resetGame);

const PLAYAGAIN = document.querySelector('.playagain');
PLAYAGAIN.addEventListener('click', resetGame);

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    computerScoreboard.textContent = `COM: ${computerScore}`;
    playerScoreboard.textContent = `PLAYER: ${playerScore}`;

    mainscreen.classList.remove('disappear');
    gameover.classList.add('disappear');

    playerRock.style.cssText = "fill:black; display: none";
    playerPaper.style.cssText = "fill:black; display: none";
    playerScissors.style.cssText = "fill:black; display: none";
    computerRock.style.cssText = "fill:black; display: none";
    computerPaper.style.cssText = "fill:black; display: none";
    computerScissors.style.cssText = "fill:black; display: none";

    nextRoundPlaceholder.style.display = "block";
    nextRoundButton.style.display = "none";

    rpsButtonGroup.forEach(button => button.style.display = "none");
    setTimeout(function(){rpsButtonGroup.forEach(button => button.style.display = "inline"); }, 5);

    setTimeout(function(){ROCK.addEventListener('click', playRock);}, 1700);
    setTimeout(function(){PAPER.addEventListener('click', playPaper);}, 1700);
    setTimeout(function(){SCISSORS.addEventListener('click', playScissors);}, 1700);

    roundText.textContent = "First to 5...";

    console.clear();   
}


// rock, paper scissors shoot animation
function animations(){

}


// display hands...
const playerRock = document.querySelector('.playerHand.rck');
const playerPaper = document.querySelector('.playerHand.ppr');
const playerScissors = document.querySelector('.playerHand.scs');
const computerRock = document.querySelector('.computerHand.rck');
const computerPaper = document.querySelector('.computerHand.ppr');
const computerScissors = document.querySelector('.computerHand.scs');

function displayPlayerRock(){
    playerRock.style.display = "block";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";
}
function displayPlayerPaper(){
    playerRock.style.display = "none";
    playerPaper.style.display = "block";
    playerScissors.style.display = "none";
}
function displayPlayerScissors(){
    playerRock.style.display = "none";
    playerPaper.style.display = "none";
    playerScissors.style.display = "block";
}
function displayComputerRock(){
    computerRock.style.display = "block";
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
}
function displayComputerPaper(){
    computerRock.style.display = "none";
    computerPaper.style.display = "block";
    computerScissors.style.display = "none";
}
function displayComputerScissors(){
    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    computerScissors.style.display = "block";
}

// display next round button
let nextRoundPlaceholder = document.querySelector('.button_placeholder');
let nextRoundButton = document.querySelector('.next');

function displayNextRound(){
    nextRoundPlaceholder.style.display = "none";
    nextRoundButton.style.display = "block";
}

// next round function

let rpsButtonGroup = document.querySelectorAll('.rps');
let roundText = document.querySelector('.button_placeholder');

function nextRound(){
    computerScoreboard.textContent = `COM: ${computerScore}`;
    playerScoreboard.textContent = `PLAYER: ${playerScore}`;

    nextRoundPlaceholder.style.display = "block";
    nextRoundButton.style.display = "none";

    computerRock.style.display = "none";
    computerPaper.style.display = "none";
    computerScissors.style.display = "none";
    playerRock.style.display = "none";
    playerPaper.style.display = "none";
    playerScissors.style.display = "none";

    rpsButtonGroup.forEach(button => button.style.display = "none");
    setTimeout(function(){rpsButtonGroup.forEach(button => button.style.display = "inline"); }, 5);


    setTimeout(function(){ROCK.addEventListener('click', playRock);}, 1700);
    setTimeout(function(){PAPER.addEventListener('click', playPaper);}, 1700);
    setTimeout(function(){SCISSORS.addEventListener('click', playScissors);}, 1700);

    roundText.textContent = "Keep Going...";
    
}

nextRoundButton.addEventListener('click', nextRound);