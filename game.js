
let playerChoice = '';
let compChoice = '';
let playerWin = 0;
let compWin = 0;
let compScore = 0;
let playerScore = 0;


function playGame(){
    const buttons = document.querySelectorAll('#gameCont button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            if(playerScore < 5 && compScore < 5){
                playRound(playerChoice, getComputerChoice());
                console.log(compScore);
                console.log(playerScore);
            }
            else if(playerScore === 5 || compScore ===5){
                alert("Game has ended. Please Reset Score");
                return;
            }
        });
    });

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

    if (playerSelection === 'rock' && computerSelection !== 'paper' && playerSelection !== computerSelection){
        playerScore++;
        alert(`Player chose ${playerChoice}. Computer chose ${compChoice}. Player wins round!`);
        return;
    }
    else if (playerSelection === 'paper' && computerSelection !== 'scissors' && playerSelection !== computerSelection){
        playerScore++;
        alert(`Player chose ${playerChoice}. Computer chose ${compChoice}. Player wins round!`);
        return;
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'rock' && playerSelection !== computerSelection){
        playerScore++;
        alert(`Player chose ${playerChoice}. Computer chose ${compChoice}. Player wins round!`);
        return;
    }
    else if (playerSelection === computerSelection){
        alert(`Player chose ${playerChoice}. Round is a TIE!`);
        return;
    }
    else {
        compScore++;
        alert(`Player chose ${playerChoice}. Computer chose ${compChoice}. Computer wins round!`);
        return;
    }


}


