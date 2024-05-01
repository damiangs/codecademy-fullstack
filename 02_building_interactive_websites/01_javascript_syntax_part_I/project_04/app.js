let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let age = 18;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly === true) {
  console.log(
    `Your race number is: ${raceNumber}. And your race will start at 9:30 am.`
  );
} else if (age > 18 && registeredEarly === !true) {
  console.log(
    `Your race number is: ${raceNumber}. And your race will start at 11:00 am.`
  );
} else if (age < 18) {
  console.log(
    `Your race number is: ${raceNumber}. And your race will start at 12:30 pm.`
  );
} else {
  console.log("Please check the registration desk.");
}
