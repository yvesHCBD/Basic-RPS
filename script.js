function computerPlay(){
    let rng = Math.floor(Math.random()*3);

    switch(rng){
        case(0):
            console.log("Computer chose Rock");
            return ("ROCK");
        case(1):
            console.log("Computer chose Paper");
            return ("PAPER");
        case(2):
            console.log("Computer chose Scissors");
            return ("SCISSORS");
    }
}

function playerPrompt(){
    let player = prompt("Rock, Paper, or Scissors");

    console.log(`Player chose ${player}`);
    return player.toUpperCase();
}

function playRPS(playerInput, computerInput){
    if((playerInput === "ROCK" && computerInput === "SCISSORS") || (playerInput === "PAPER" && computerInput === "ROCK")
        || playerInput === "SCISSORS" && computerInput === "PAPER"){
        console.log(`${playerInput} beats ${computerInput}!`);
        return ("PLAYER WINS");
    }else if((computerInput === "ROCK" && playerInput === "SCISSORS") || (computerInput === "PAPER" && playerInput === "ROCK")
        || computerInput === "SCISSORS" && playerInput === "PAPER"){
        console.log(`${computerInput} beats ${playerInput}!`);
        return ("COMPUTER WINS");
    }else if(playerInput === computerInput){
        return ("TIE");
    }
}

function gemu(){
    let playerWins = 0;
    let computerWins = 0;
    let gameCount = 1;
    let tieCount = 0;
    let score;

    do{
        score = playRPS(playerPrompt(), computerPlay());
        switch(score){
            case ("PLAYER WINS"):
                console.log("CONGRATULATIONS ON WINNING");
                console.log("--------------------------");
                playerWins++;
                gameCount++;
                break;
            case ("COMPUTER WINS"):
                console.log("CONGRATULATIONS ON LOSING");
                console.log("--------------------------");
                computerWins++;
                gameCount++;
                break;
            case ("TIE"):
                console.log("IT'S A TIE");
                console.log("--------------------------");
                tieCount++;
                gameCount++;
                break;
            default:
                console.log("ERROR");
                break;
        }
    }while(playerWins !== 3 && computerWins !== 3);


    console.log(`Player Wins: ${playerWins}`);
    console.log(`Computer Wins: ${computerWins}`);
    console.log(`Ties: ${tieCount}`);

}

console.log("Welcome to a game of Rock-Paper-Scissors!");
gemu();