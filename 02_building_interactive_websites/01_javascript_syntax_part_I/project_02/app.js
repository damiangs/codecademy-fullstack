// my age as number
let myAge = 29;

// early years value 2
let earlyYears = 2;

earlyYears *= 10.5;

// rest the value 2 to my age
laterYears = myAge - 2;

// multiply the value by 4 and reassing in a single step
laterYears *= 4;

// add earlyYears to laterYears
let myAgeInDogYears = earlyYears + laterYears;

// write my name as string and call built-in method toLocaleLowerCase
let myName = "Carlos".toLocaleLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);