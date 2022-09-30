let userSelection = prompt("Choose ROCK, PAPER, or SCISSORS");

let computerSelection = Math.random()

//Computer chooses PAPER
if (computerSelection <= 0.34){
    console.log("Computer chose PAPER")
    if (userSelection == "PAPER" || userSelection == "paper" || userSelection == "Paper"){
        console.log("Tie!!")
    }
    else if (userSelection == "ROCK" || userSelection == "rock"  || userSelection == "Rock"){
        console.log("Computer wins!!")
    }
    else if (userSelection == "SCISSORS" || userSelection == "scissors" || userSelection == "Scissors"){
        console.log("User wins!!")
    }
}

//Computer chooses SCISSORS
else if (0.35 <= computerSelection <= 0.67){
    console.log("Computer chose SCISSORS")
    if (userSelection == "PAPER" || userSelection == "paper" || userSelection == "Paper"){
        console.log("User wins!!")
    }
    else if (userSelection == "ROCK" || userSelection == "rock"  || userSelection == "Rock"){
        console.log("User wins!!")
    }
    else if (userSelection == "SCISSORS"){
        console.log("Tie!!")
    }
}

//Computer chooses ROCK
else if (0.68 <= computerSelection <= 1.00){
    console.log("Computer chose ROCK")
    if (userSelection == "PAPER" || userSelection == "paper" || userSelection == "Paper"){
        console.log("User wins!!")
    }
    else if (userSelection == "ROCK" || userSelection == "rock"  || userSelection == "Rock"){
        console.log("Tie!!")
    }
    else if (userSelection == "SCISSORS" || userSelection == "scissors" || userSelection == "Scissors"){
        console.log("Computer wins!!")
    }
}
