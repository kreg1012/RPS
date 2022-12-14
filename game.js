
let playerChoice = '';
let compChoice = '';
let playerWin = 0;
let compWin = 0;
let compScore = 0;
let playerScore = 0;
let pScoreText = document.querySelector('span.player');
let cScoreText = document.querySelector('span.computer');
let resetButton = document.querySelector('button#reset');


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

function updateScore(pScore, cScore){
    pScoreText.textContent = `Player: ${pScore}`;
    cScoreText.textContent = `Computer: ${cScore}`;

}


function playRound (playerSelection, computerSelection){

    if (playerSelection === 'rock' && computerSelection !== 'paper' && playerSelection !== computerSelection){
        playerScore++;
        updateScore(playerScore,compScore);
        return;
    }
    else if (playerSelection === 'paper' && computerSelection !== 'scissors' && playerSelection !== computerSelection){
        playerScore++;
        updateScore(playerScore,compScore);
        return;
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'rock' && playerSelection !== computerSelection){
        playerScore++;
        updateScore(playerScore,compScore);
        return;
    }
    else if (playerSelection === computerSelection){
        alert(`Player chose ${playerChoice}. Round is a TIE!`);
        return;
    }
    else {
        compScore++;
        updateScore(playerScore,compScore);
        return;
    }


}

function resetGame(){
    resetButton.addEventListener('click', () => {
        compScore = 0;
        playerScore = 0;
        pScoreText.textContent = `Player: ${playerScore}`;
        cScoreText.textContent = `Computer: ${compScore}`;

    })
}


