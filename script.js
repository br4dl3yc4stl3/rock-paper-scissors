function hello() {
    console.log("Hello, World!")
}


function game() {
    let playerScore = 0;
    let compScore = 0;
    function rps() {
        let playerChoice = prompt("Choose wisely...", "");
        let compChoice = ["rock", "paper", "scissors"][~~(Math.random() * 3)];
        if (playerChoice === "rock" && compChoice === "rock") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "rock" && compChoice === "paper") {
            console.log("Computer Wins, that means, YOU LOSE...");
            compScore++;
        }
        else if (playerChoice === "rock" && compChoice === "scissors") {
            console.log("YOU WIN, Congrats!!!");
            playerScore++;
        }
        else if (playerChoice === "scissors" && compChoice === "scissors") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "scissors" && compChoice === "rock") {
            console.log("Computer Wins, that means, YOU LOSE...");
            compScore++;
        }
        else if (playerChoice === "scissors" && compChoice === "paper") {
            console.log("YOU WIN, Congrats!!!");
            playerScore++;
        }
        else if (playerChoice === "paper" && compChoice === "paper") {
            console.log("It's a tie...")
        }
        else if (playerChoice === "paper" && compChoice === "scissors") {
            console.log("Computer Wins, that means, YOU LOSE...");
            compScore++;
        }
        else if (playerChoice === "paper" && compChoice === "rock") {
            console.log("YOU WIN, Congrats!!!");
            playerScore++;
        }
        else if (playerChoice != "rock" || "paper" || "scissors") {
            console.log("Only 3 choices are rock, paper, scissors");
            window.alert("ERROR: Please read console message");          
        }
        console.log(playerChoice);
        console.log(compChoice);
        
    }
    rps();
    rps();
    rps();
    console.log('You won %s games', playerScore);
    console.log('Computer won %s games', compScore);

}