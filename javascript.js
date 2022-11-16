function playRound (playerSelection, computerSelection){

}

function getComputerChoice() {
    let compChoice = '';
    let rndNum = Math.floor(Math.random() * 3) + 1;

    switch (rndNum){
        case 1: 
            compChoice = 'rock';
            break;
        case 2:
            compChoice = 'paper';
            break;
        case 3:
            compChoice = 'scissors';
            break;
    }
    return compChoice;
}