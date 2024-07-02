let humanScore = 0;
let computerScore = 0;

function playGame(){

}

function playRound(humanChoice, computerChoice){
    console.log(`You: ${humanChoice} vs Computer: ${computerChoice}`);

    if(humanChoice == computerChoice){
        console.log('Nobody won!');
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {
        console.log('You won!');
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log('You lost!');
        computerScore++;
    }
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
    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

//playGame();
console.log(playRound("rock", "paper"));

