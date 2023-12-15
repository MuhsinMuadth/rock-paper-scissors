let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} vs ${computerChoice}. You Win!`;
  result_p.classList.add("fade-in-green");
  setTimeout(() => result_p.classList.remove("fade-in-green"), 150);
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} vs ${computerChoice}. Its a Draw!`;
  result_p.classList.add("fade-in-grey");
  setTimeout(() => result_p.classList.remove("fade-in-grey"), 150);
  document.getElementById(userChoice).classList.add("grey-glow")
  setTimeout(() => document.getElementById(userChoice).classList.remove("grey-glow"), 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${userChoice} vs ${computerChoice}. Comp Wins!`;
  result_p.classList.add("fade-in-red");
  setTimeout(() => result_p.classList.remove("fade-in-red"), 150);
  document.getElementById(userChoice).classList.add("red-glow")
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice); //User wins
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;
    default:
      lose(userChoice, computerChoice); // User lost
  }
}

function main() {
  rock_div.addEventListener("click", () => game("Rock"));
  paper_div.addEventListener("click", () => game("Paper"));
  scissors_div.addEventListener("click", () => game("Scissors"));
}

main();
