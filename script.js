function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    console.log("Let the game begin!");

    for(let i = 0; i < 5; i++){
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);
        switch(winner){
            case "nobody": 
            break;
            case "human": humanScore++;
            break;
            case "computer": computerScore++;
            break;
        }
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
        return "nobody";
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {
        console.log('You won this round!');
        return "human";
    }
    else if(humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log('You lost this round!');
        return "computer";
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
