let humanScore = 0;
let computerScore = 0;

function playGame(){
    // let humanScore = 0;
    // let computerScore = 0;

    console.log("Let the game begin!");

    for(let i = 0; i < 5; i++){
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    if(humanScore > computerScore){
        console.log('You won this game!');
    }else if(humanScore < computerScore){
        console.log('You lost this game!');
    }else{
        console.log('Nobody won this game!');
    }

}

function playRound(humanChoice, computerChoice){
    console.log(`You: ${humanChoice} vs Computer: ${computerChoice}`);

    if(humanChoice == computerChoice)
    {
        console.log('Nobody won this round!');
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {
        console.log('You won this round!');
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log('You lost this round!');
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

playGame();
