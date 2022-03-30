const startGameBtn = document.getElementById("start-game-btn");

// const start=function (){
//     console.log(`The game is starting...`);
// };

// const person={
//     greet:function greet(){
//         console.log(`Hello there!`);
//     }   //-->Function can be stored in the object
// };
// person.greet();

// console.dir(startGame);
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ``
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you !`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randoValue = Math.random();
  if (randoValue < 0.34) {
    return ROCK;
  } else if (randoValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice == PAPER) ||
      (cChoice === PAPER && pChoice == SCISSORS) ||
      (cChoice === SCISSORS && pChoice == ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
// if(cChoice===pChoice){
//     return RESULT_DRAW;
// }else if(cChoice===ROCK &&pChoice==PAPER ||cChoice===PAPER &&pChoice==SCISSORS ||cChoice===SCISSORS &&pChoice==ROCK ){
//     return RESULT_PLAYER_WINS;
// }
// else{
//     return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener(`click`, function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log(`The game is starting...`);
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You pickes ${playerChoice} ,computer picked ${computerChoice} , therefore you `;
  if (winner === RESULT_DRAW) {
    message += "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won.";
  } else {
    message += "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const s of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(s);
    } else {
      sum -= validateNumber(s);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function (resultHandler,...numbers) {
//   let sum = 0;
//   for (const s of numbers) {
//     //dont use
//     sum -= s;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + ` ` + result);
};

// sumUp(showResult,1, 2, 3, 4, "f");
// subtractUp(showResult,1, 3, 5, 7, 5, 54, 3, 3);
combine(
  showResult.bind(this, "The result after adding all number is : "),
  "ADD",
  1,
  2,
  3,
  4,
  "f"
);
combine(
  showResult.bind(this, "The result after adding all number is : "),
  "SUBTRACT",
  1,
  3,
  5,
  7,
  5,
  54,
  3,
  3
);
