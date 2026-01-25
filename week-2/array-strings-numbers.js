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
