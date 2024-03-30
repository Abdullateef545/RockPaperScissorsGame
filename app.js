//user and computer scores.
let userScore = 0;
let computerScore = 0;

//access the choices
const choices = document.querySelectorAll(".choice");
//access id= msg
const msg = document.querySelector("#msg");
//access userScore and computerScore
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");

//Generate computer choice
const generateComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    // Here the random function is multiplied by 3 because we need range from 0 to 2 to access option.
    let idx = Math.floor(Math.random() * 3);
    return option[idx];

}

//draw game
const drawGame = () => {
    //display the message
    msg.innerText = "Game is draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

//user status
const showWin = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        //display the message
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        //update the score
        userScore++;
        //update the message and display
        userScorePara.innerText = userScore;
    }
    else {
        //display the message
        msg.innerText = `You lose!  ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        //update the score
        computerScore++;
        //update the message and display
        computerScorePara.innerText = computerScore;
    }
}

//rock paper scissor game logic
const playGame = (userChoice) => {
    //computer choice
    let computerChoice = generateComputerChoice();
    //we got both user choice and computer choice so lets start building logic
    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            //paper and scissors
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock and scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            //paper and rock
            userWin = computerChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, computerChoice);
    }

}

//to identify the clicked choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});