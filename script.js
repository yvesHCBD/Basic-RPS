console.log("Welcome to Rock paper Scissors!")


function computerPlay(){
    let rng = Math.floor(Math.random() * (3 - 1 + 1 ) + 1)
    switch (rng){
        case 1: 
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
        default:
            console.log("Error Occurred")
    }
}

//let playerSelection = prompt("Enter Rock Paper or Scissors")


function playRPS(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase()
    let computer = computerSelection.toUpperCase()
    if(player === computer){
        console.log("TIE")
    }else if (player === "ROCK" && computer === "SCISSORS"
                || player === "PAPER" && computer === "ROCK"
                || player === "SCISSORS" && computer === "PAPER"){
                    console.log("PLAYER WINS!")
                    console.log(`${playerSelection} beats ${computerSelection}`)
                }else{
                    console.log("COMPUTER WINS!")
                    console.log(`${computerSelection} beats ${playerSelection}`);
                }
        
            
}



playRPS("ROCK", "ROck")
playRPS("scissors", "PAPER")
playRPS("PAPER", "SCissoRs")
