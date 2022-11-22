let playerInput;
let playerChoice;
let compChoice = '';
let playerWin = 0;
let compWin = 0;
let compScore;
let playerScore;


function getPlayerChoice(){
    const buttons = document.querySelectorAll('#gameCont button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerChoice = button.id;
        });
    });

    return playerChoice;
}

function getComputerChoice() {
    let rndNum = Math.floor(Math.random() * 3);

    switch(rndNum) {
        case 0: 
            compChoice = 'rock';
            break;
        case 1: 
            compChoice = 'paper';
            break;
        case 2: 
            compChoice = 'scissors';
            break;
    }
    
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

