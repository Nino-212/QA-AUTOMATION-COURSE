//Part 1: Arrays (Car Brands)
//Task2 Updateing Elements
let carBrands = ["BMW", "Ford", "AUDI", "Tesla", "KIA"];
carBrands[2] = "Mersedes";
carBrands[4] = "maserati";
console.log(carBrands); // 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati' ]

//Task 3.
carBrands.push("Mini");
console.log(carBrands); //add new car//[ 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati', 'Mini' ]

carBrands.pop();
console.log(carBrands); //?remove//[ 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati' ]

carBrands.unshift("Aston Martin");
console.log(carBrands); //add to the bigining //[ 'Aston Martin', 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati' ]

carBrands.shift();
console.log(carBrands); // remove first car//[ 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati' ]

carBrands.reverse();
console.log(carBrands); // reverse //[ 'maserati', 'Tesla', 'Mersedes', 'Ford', 'BMW' ]

carBrands.sort();
console.log(carBrands); //alphabeticlly// [ 'BMW', 'Ford', 'Mersedes', 'Tesla', 'maserati' ]

//4. Finder methods
console.log(carBrands.includes("Toyota")); //find Toyota// false

console.log(carBrands[0]); // index BMW

const lastIndexBMW = carBrands.lastIndexOf("BMW");
console.log(lastIndexBMW); //// BMW appears only once in the array, so first and last index are the same (0)

//Task 5 Joiners

const allBrands = carBrands.join(",");
console.log("join ():", allBrands); // single string//BMW,Ford,Mersedes,Tesla,maserati

console.log(Array.isArray(carBrands)); //true

const word = "Engine";
const chars = Array.from(word);
console.log(chars); // [ 'E', 'n', 'g', 'i', 'n', 'e' ]

//Part 2
//Clean a String

let cars = "  BMW   Ford     AUDI     Tesla     KIA   ";
let newCars = cars.trim().replace(/\s+/g, " ");
console.log(newCars); //BMW Ford AUDI Tesla KIA;
console.log(newCars.length); //23

// Task 7 Case & Access
let newUpCars = newCars.toUpperCase();
console.log(newUpCars); //BMW FORD AUDI TESLA KIA

let newLowCars = newUpCars.toLowerCase();
console.log(newLowCars); // bmw ford audi tesla kia

console.log(newLowCars[0]);

console.log(newLowCars.length); //23
console.log(newLowCars[22]);

// Task 8. Slice & Replace

let theBestCar = newLowCars.split(" ");
console.log(theBestCar[0]); // bmw

console.log(theBestCar[4]); // kia

//Task 9: Search Methods

"newLowCars".includes("car");
console.log(newLowCars.includes("car")); // false

newLowCars.indexOf("tesla");
console.log(newLowCars.indexOf("tesla")); // 14

console.log(newUpCars.startsWith("BMW")); // true
console.log(newUpCars.endsWith("BMW")); // false

//Task 10: Split & Concat

let carWords = newUpCars.split(" "); //[ 'BMW', 'FORD', 'AUDI', 'TESLA', 'KIA' ]
console.log(carWords);

let allCars = newLowCars.concat(" ", newUpCars); // bmw ford audi tesla kia BMW FORD AUDI TESLA KIA
console.log(allCars);

//Task 11:Template Literals

let SportcarBrand = "McLaren";
let carYear = 2020;
let carAge = 6;
console.log(`Car: ${SportcarBrand}, year: ${carYear}, age${carAge}`); //Car: McLaren, year: 2020, age6

//PART 3: Numbers
//Task 12 Rouding

let number = 120.1;
console.log(Math.round(120.1)); //120

console.log(Math.floor(120.1)); //120

console.log(Math.trunc(120.1)); //120

console.log(Math.ceil(120.1)); //121

let price = 420.558;

//Task 13 Formatting
console.log(price.toFixed(2)); //420.56

//Task 14 Conversions

let strNumber = "77";
let number7 = Number(strNumber);

console.log(number7); // 77
console.log(typeof number7); // "number"

//Task 15 Checking
// Task 15: Checking

// 1. Check if a value is Not a Number
let value = "abc";

let isNotANumber = Number.isNaN(Number(value));
console.log(isNotANumber); // true

// 2. Check if a number is an integer
// Task 15: Checking

// 1. Check if a value is Not a Number
let value1 = "abc";

let isNotANumber15 = Number.isNaN(Number(value1));
console.log(isNotANumber15); // true

// 2. Check if a number is an integer
let num = 10.5;

let isInteger = Number.isInteger(num);
console.log(isInteger); // false

// Task 16: Math Utilities

// 1. Find the absolute value of a number
let number1 = -15;
console.log(Math.abs(number1)); // 15

// 2. Find the smallest number
console.log(Math.min(3, 7, 1, 9)); // 1

// 3. Find the largest number
console.log(Math.max(3, 7, 1, 9)); // 9

// 4. Raise a number to a power
console.log(Math.pow(2, 3)); // 8

// 5. Find the square root of a number
console.log(Math.sqrt(16)); // 4

// Task 17: Random Numbers

// 1. Generate a random number between 0 and 1
let randomBetween0And1 = Math.random();
console.log(randomBetween0And1);

// 2. Generate a random whole number between 1 and 10
let randomBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log(randomBetween1And10);

// 3. Explain the formula in comments

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
// * 10 scales the number to a range from 0 to 9.999...
// Math.floor() rounds the number down to the nearest whole number (0–9)
// + 1 shifts the range to 1–10

// FINAL MINI CHALLENGE

// 1. Takes a sentence about cars
let sentence = "   I LOVE fast CARS and electric vehicles   ";

// 2. Cleans it (trim + case change)
let cleanedSentence = sentence.trim().toLowerCase();

// 3. Splits it into words
let words = cleanedSentence.split(" ");

// 4. Prints the number of words using a template literal
console.log(`The sentence has ${words.length} words`);
