//create a variable with the text you want to translate to whale talk
const input = "turpentine and turtles";

//create an array with the vowels for the whale talk
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

//create a loop through the letters of the input variable
for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

const resultString = resultArray.join("").toUpperCase();

console.log(resultString);
