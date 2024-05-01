let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// create a function to return a random integer between 0 and 9
const generateTarget = () => {
  randNum = Math.ceil(Math.random() * 9);
  return randNum;
};

//compare the human input vs the computer choice and the target secret number
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const userDiff = Math.abs(secretTarget - humanGuess);
  const computerDiff = Math.abs(secretTarget - computerGuess);

  if (userDiff < computerDiff || userDiff === computerDiff) {
    return true;
  } else {
    return false;
  }
};

//create a function to represent the winner and increase the score after each round
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

//function to increase the value of the current round
const advanceRound = () => {
  if (updateScore) {
    currentRoundNumber++;
    return currentRoundNumber;
  }
};
