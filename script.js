function playGame(){

}

function playRound(){

}

function isValidChoice(choice){
    if (choice == null) return false;
    choice = choice.toLowerCase();
    if(choice != "rock" && choice != "paper" && choice != "scissors"){
        return false;
    }
    return true;
}

function getHumanChoice(){
    let choice;
    while(true){
        choice = prompt("Choose 'rock', 'paper' or 'scissors':", '');
        if(isValidChoice(choice)){
            return choice;
        }else{
            alert("Uncorrect option!");
            continue;
        }
    }
}

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

//playGame();
console.log(getComputerChoice());

