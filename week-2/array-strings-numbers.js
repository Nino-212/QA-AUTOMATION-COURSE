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
