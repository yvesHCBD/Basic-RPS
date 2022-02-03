console.log("Welcome to Rock-Paper-Scissors!")


function computerPlay(){
    let rng = Math.floor(Math.random() * 3)
    console.log(`Computer entered ${rng}.`);
    switch (rng){
        case 0: 
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
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
        return ("TIE")
    }else if (player === "ROCK" && computer === "SCISSORS"
                || player === "PAPER" && computer === "ROCK"
                || player === "SCISSORS" && computer === "PAPER"){
                    return("PLAYER WINS!")
                    //console.log(`${playerSelection} beats ${computerSelection}`)
                }else{
                    return("COMPUTER WINS!")
                    //console.log(`${computerSelection} beats ${playerSelection}`);
                }
        
            
}

//RPS function working properly


playRPS("ROCK", "ROck")
playRPS("scissors", "PAPER")
playRPS("RoCk", "papeR")
//testing
playRPS("rock", computerPlay())


console.log("==========================================================");

function game() {

    let playerCount = 0;
    let computerCount = 0;
    let tieCount = 0;
    

 
    do{
        if(playRPS("Paper",computerPlay()) === "PLAYER WINS!"){
            playerCount++;
            console.log(`Congratulations on winning game ${playerCount}`);
        }else if(playRPS("Rock", computerPlay()) === "COMPUTER WINS!"){
            computerCount++;
            console.log(`Uh oh the computer won game ${computerCount}! Better luck next time.`);
        }else{
            tieCount++;
            console.log('IT\'S A TIE! NO ONE WON');
        }
    }while(playerCount != 3 && computerCount != 3)

    console.log(`Player wins: ${playerCount}`)
    console.log(`Computer wins: ${computerCount}`);
    console.log(`TIES: ${tieCount}`);

}


game()