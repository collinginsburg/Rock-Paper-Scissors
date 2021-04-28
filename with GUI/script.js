
    // The COM: function which randomly returns Rock, Paper, or Scissors from an array,
    // array items are all caps to create consistency for comparison with user input

    let computerHand = ["ROCK", "PAPER", "SCISSORS"];
    computerHandLength = computerHand.length;

    function computerPlay(){
        return computerHand[Math.floor(Math.random() * computerHandLength)];
            
    }
    
    // // function to compare user input and computerPlay based on rockpaperscissors game rules, 
    // print the results, and return the score.

    function playRound(playerSelection, computerSelection){

        playerSelection = prompt("Rock, Paper, Scissors. Type wisely.").toUpperCase();
        computerSelection = computerPlay().toUpperCase();

        if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            alert ("You win! Rock beats Scissors.");
            playerScore = playerScore + 1;
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return playerScore;
        }else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
            computerScore = computerScore + 1; 
            alert ("You lose! Paper beats Rock");
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return computerScore;
        }else if (playerSelection === "ROCK" && computerSelection === "ROCK"){
            alert ("Tie!");
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
        }else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            alert ("You lose. Rock beats Scissors");
            computerScore = computerScore + 1;
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return computerScore;
        }else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            alert ("You win! Scissors beats Paper!");
            playerScore = playerScore + 1;
            alert(
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return playerScore;
        }else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"){
            alert ("Tie!");
            alert(
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
        }else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
            alert ("You win! Paper beats Rock!");
            playerScore = playerScore + 1; 
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return playerScore;
        }else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
            alert ("Tie!");
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
        }else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            alert ("You lose! Scissors beats Paper.");
            computerScore = computerScore + 1; 
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return computerScore;
        } else if (playerSelection === "poop" || playerSelection === "Poop" || playerSelection === "POOP"){
            alert ("WOO HOO!!!");
            playerScore = playerScore + 500000; 
            alert (
            `Player score: ${playerScore} Opponent Score: ${computerScore}`);
            return computerScore;
        }
    }

    // function to play 1st to 5 rockpaperscissor game: 
    // resets scores to 0, 
    // alerts welcome message, 
    // plays a round, and continues loop until a player hits 5 points, 
    // then checks the scores and displays winner

    function game(){
        playerScore = 0;
        computerScore = 0;
        alert("The Game is Rock, Paper, Scissors. First to 5 wins. Good Luck.");

        do {
            playRound();
        }
        while (playerScore < 5 && computerScore < 5);
            checkScore();
}

    // function to check score after a player hits 5, first player to reach 5 points 
    // determines win/lose alert

    function checkScore(){
        if (playerScore >= 5){
            alert("You win! To play again, refresh the page.")

        }else{
            alert("You've lost the game....:/ To play again, refresh the page.");}
    }

    // run the game on page load

    game();
