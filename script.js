function hello() {
    console.log("Hello, World!")
}


function game() {
    function rps() {
        let playerChoice = prompt("Choose wisely...", "");
        let compChoice = ["rock", "paper", "scissors"][~~(Math.random() * 3)];
        if (playerChoice === "rock" && compChoice === "rock") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "rock" && compChoice === "paper") {
            console.log("Computer Wins, that means, YOU LOSE...")
        }
        else if (playerChoice === "rock" && compChoice === "scissors") {
            console.log("YOU WIN, Congrats!!!");
        }
        else if (playerChoice === "scissors" && compChoice === "scissors") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "scissors" && compChoice === "rock") {
            console.log("Computer Wins, that means, YOU LOSE...")
        }
        else if (playerChoice === "scissors" && compChoice === "paper") {
            console.log("YOU WIN, Congrats!!!");
        }
        else if (playerChoice === "paper" && compChoice === "paper") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "paper" && compChoice === "scissors") {
            console.log("Computer Wins, that means, YOU LOSE...")
        }
        else if (playerChoice === "paper" && compChoice === "rock") {
            console.log("YOU WIN, Congrats!!!");
        }
        console.log(playerChoice);
        console.log(compChoice);
    }
    rps();
    rps();
    rps();
    
}