let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice)
    {
        return "nobody";
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {
        return "human";
    }
    else
    {
        return "computer";
    }
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let selectedChoice = Math.floor(Math.random() * 3);
    
    return choices[selectedChoice];
}

function toggleBtnsVisibility(){
    choiceButtons.forEach((button) => {
        button.classList.toggle("visibility");
    });
    resetBtn.classList.toggle("visibility");
}

function resetAll(){
    humanScore = computerScore = 0;
    humanScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    logs.textContent = "";
    winnerMessage.textContent = "";
    toggleBtnsVisibility();
}

function updateScore(winner){
    switch(winner){
        case "nobody": 
            winnerMessage.textContent = "Nobody won this round!";
            break;
        case "human": 
            humanScore++;
            humanScoreSpan.textContent = humanScore;
            winnerMessage.textContent = "Human won this round!";
            break;
        case "computer": 
            computerScore++;
            computerScoreSpan.textContent = computerScore;
            winnerMessage.textContent = "Computer won this round!";
            break;
    }
}

function updateLogs(humanChoice, computerChoice){
    const logsItem = document.createElement("li");
    logsItem.textContent = `${humanChoice} vs ${computerChoice}`;
    logs.appendChild(logsItem);
}

const choicesContainer = document.querySelector(".choices-container");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const logs = document.querySelector("#logs");
const winnerMessage = document.querySelector("#winner-message");
const choiceButtons = document.querySelectorAll(".choices-btns");
const resetBtn = document.querySelector("#reset");

choicesContainer.addEventListener("click",(event) =>{
    let humanChoice = event.target.id;
    if(humanChoice === "") return;
    let computerChoice = getComputerChoice();
    let winner;

    switch(humanChoice){
        case "rock": 
            winner = playRound("rock", computerChoice);
            break;
        case "paper": 
            winner = playRound("paper", computerChoice);
            break;
        case "scissors": 
            winner = playRound("scissors", computerChoice);
            break;
        case "reset":
            resetAll();
            return;
    }

    updateScore(winner);

    updateLogs(humanChoice, computerChoice);
    
    if(humanScore === 5){
        winnerMessage.textContent = "Human won this game!";
        toggleBtnsVisibility()
    }else if(computerScore === 5){
        winnerMessage.textContent = "Computer won this game!";
        toggleBtnsVisibility()
    }
});

