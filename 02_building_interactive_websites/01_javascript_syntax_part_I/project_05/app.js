//create a function to get the user's choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Not a valid input.");
    return null;
  }
};

//create a function to get computer's choice
const getComputerChoice = () => {
  const rand = Math.floor(Math.random() * 3);

  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

//create a function to determine if the user or the computer is the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};

//create a function to start playing the game
const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
