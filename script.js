console.log("Welcome to Rock paper Scissors!")


function computerPlay(){
    let rng = Math.floor(Math.random() * (3 - 1 + 1 ) + 1)
    switch (rng){
        case 1: 
            console.log("Rock")
            break;
        case 2:
            console.log("Paper")
            break;
        case 3:
            console.log("Scissors")
            break;
        default:
            console.log("Error Occurred")
    }
}





