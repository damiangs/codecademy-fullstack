// constant variable for kelvin value
const kelvin = 293;

// value of celsius is 273 less than kelvin
const celsius = kelvin - 273;

//fahrenheit formula
const fahrenheit = celsius * (9/5) + 32;

// round decimals of fahrenheit
Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
