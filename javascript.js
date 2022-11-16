let playerInput;
let compChoice = '';
let playerWin = 0;
let compWin = 0;
let compScore;
let playerScore;


function getPlayerChoice(){
    playerInput = prompt("Type Rock, Paper, or Scissors",'');
    playerInput = playerInput.toLowerCase();
    let playerChoiceInt;
    
    //assign int value to player choice 

    if (playerInput === 'rock'){
        playerChoiceInt = 0;
    }
    else if (playerInput === 'paper'){
        playerChoiceInt = 1;
    }
    else if(playerInput === 'scissors') {
        playerChoiceInt = 2;
    }
    else {
        alert("Player Choice not recognized, please refresh and try again");
        playerChoiceInt = null;
    }

    return playerChoiceInt;

}

function getComputerChoice() {
    let rndNum = Math.floor(Math.random() * 3);
    compChoice = rndNum;
    console.log(compChoice);
    return compChoice;
}

function playRound (playerSelection, computerSelection){

    if (playerSelection === 0 && computerSelection !== 1 && playerSelection !== computerSelection){
        playerWin++;
        alert(`Player chose ${playerInput}. Player wins round`);
    }
    else if (playerSelection === 1 && computerSelection !== 2 && playerSelection !== computerSelection){
        playerWin++;
        alert(`Player chose ${playerInput}. Player wins round`);
    }
    else if (playerSelection === 2 && computerSelection !== 0 && playerSelection !== computerSelection){
        playerWin++;
        alert(`Player chose ${playerInput}. Player wins round`);
    }
    else if (playerSelection === computerSelection){
        alert(`Player chose ${playerInput}. Round is a TIE!`);
    }
    else {
        compWin++;
        alert(`Player chose ${playerInput}. Computer wins round`);
    }


}

function playGame() {
    
    for (let r = 0; r < 5; r++){
        playRound(getPlayerChoice(), getComputerChoice());
        compScore = compWin;
        playerScore = playerWin;
    }
    alert(`Game has ended. Score is \nPlayer: ${playerScore} \nComputer: ${compScore}`);
}

