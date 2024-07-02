function playGame(){

}

function playRound(){

}

function getHumanChoice(){
    let choice;
    let isValidChoice;
    while(true){
        choice = prompt("Choose 'rock', 'paper' or 'scissors':", '');
        choice = choice.toLowerCase();
        if(isValidChoice(choice)){
            return choice;
        }else{
            alert("Uncorrect option!");
            continue;
        }
    }
}

function isValidChoice(choice){
    if(choice != "rock" && choice != "paper" && choice != "scissors"){
        return false;
    }
    return true;
}

function getComputerChoice(){

}

//playGame();
getHumanChoice();
