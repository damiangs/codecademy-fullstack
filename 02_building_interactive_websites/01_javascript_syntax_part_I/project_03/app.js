let username = "";

username !== "" ? console.log(`Hello, ${username}!`) : console.log("Hello!");

let userQuestion = "";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 1:
    eightBall = randomNumber;
    console.log("It is certain");
    break;

  case 2:
    eightBall = randomNumber;
    console.log("It is decidedly so");
    break;

  case 3:
    eightBall = randomNumber;
    console.log("Reply hazy try again");
    break;

  case 4:
    eightBall = randomNumber;
    console.log("Cannot predict now");
    break;

  case 5:
    eightBall = randomNumber;
    console.log("Do not count on it");
    break;

  case 6:
    eightBall = randomNumber;
    console.log("My sources say no");
    break;

  case 7:
    eightBall = randomNumber;
    console.log("Outlook not so good");
    break;

  case 8:
    eightBall = randomNumber;
    console.log("Signs point to yes");
    break;
}

console.log(eightBall);
