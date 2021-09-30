let playerScore = 0;
let compScore = 0;
let playerChoice;


function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        window.alert("Tie");
        console.log("Nobody scores...")
        console.log(playerScore, compScore)
    }
    else if ((playerChoice==='rock' && compChoice=='scissors') ||
            (playerChoice==='paper' && compChoice==='rock') ||
            (playerChoice==='scissors' && compChoice==='paper')) {
                window.alert("Player wins this round!");
                playerScore++
                console.log("Player scores 1 point!")
                console.log(playerScore, compScore)
                if (playerScore === 5) {
                    alert("You WON!! Thanks for playing!")
                }
    }
    else if ((playerChoice==='rock' && compChoice=='paper') ||
            (playerChoice==='paper' && compChoice==='scissors') ||
            (playerChoice==='scissors' && compChoice==='rock')) {
                window.alert("Computer wins this round...");
                compScore++;
                console.log("Computer scores 1 point :(")
                console.log(playerScore, compScore)
                if (compScore === 5) {
                    alert("Sorry you LOST :(... Thanks for playing.")
                }
    }

}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))

function handleClick(playerChoice) {
    if (playerScore < 5 && compScore < 5) {
        const compChoice = ["rock", "paper", "scissors"][~~(Math.random() * 3)];
        playRound(playerChoice, compChoice)
        return
    }
}