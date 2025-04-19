// Use a JavaScprit tp create a gaome of snake, water and Gun. The game should ask you to Enter
//  1 . Snake, water or Gun
// 2 .The computer should Randomly Generate tge Snake, water or Gun
// 3. Then declare win or loss using uisng alert or prompt where Required

const prompt = require('prompt-sync')();

const choices = ["water", "gun", "snake"];    ///make sure the choices stays in lower case because afterwards we make it to lower case which i had my self problem here 

//function for the generating random number

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//function for getting result who wins
function getResult(player, computer) {

  if (player === computer) {
    return "It is a draw";
  }
  if (player === "water" && computer === "gun" ||
    player === "gun" && computer === "snake" ||
    player === "snake" && computer === "water"
  ) {
    return "You have won!";
  }
  return "You have lost!";
}

console.log("=== Water || Gun || Snake ===");

let playerChoice = prompt("Enter your Choice (water,gun or snake)").toLowerCase();

if (!choices.includes(playerChoice)) {
  console.log("Invalid choice by the user");
} else {
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);
  console.log(getResult(playerChoice, computerChoice));
}