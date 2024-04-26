let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Remove the last string of the secretMessage array
secretMessage.pop();

//add the words "to" and "Program"  to the end of the array
secretMessage.push("to");
secretMessage.push("Program");

//change the word "easily" to the word right
secretMessage[7] = "right";

//remove the first string of the array
secretMessage.shift();

//add the string "Programming" as the first string of the array
secretMessage.unshift("Programming");

//remove the strings "get, right, the, first, time," and replace them with the string "know,"
secretMessage.splice(6, 6, "know,");

console.log(secretMessage);
console.log(secretMessage.join(" "));
