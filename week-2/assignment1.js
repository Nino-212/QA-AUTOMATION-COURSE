//Part 1

const a = 10;
const b = 5;

const addResult = a + b;
console.log(addResult);

const substractResult = a - b;
console.log(substractResult);

const multiplyResult = a * b;
console.log(multiplyResult);

const divideResult = a / b;
console.log(divideResult);

//2 Increase
let c = 5;
c++;
console.log(c);

//Decrise
let d = 6;
d--;
console.log(d);

//Remainder
let e = 10;
let f = 5;
console.log(e % f);

//Raise it to the power
const number = 15;
console.log(number ** 2);

//Part 2 Comparison Operators
let age = 100;
let anniversary = "100 years";
console.log(age === anniversary);

//1.Create two different numbers

let firstNumber = 10;
let secondNumber = 2;
console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);

const aBc = 15;
const aVb = 10;
console.log(aBc !== aVb);

//Part 3:
//1. Comparisson expressions and combaine them

let firstRoom = 10;
let secondRoom = 8;
console.log(firstRoom && secondRoom);

//2.
let table = 7;
let chair = 2;
let couch = 10;
console.log(chair < couch || table > couch);

//3
let ab = 5;
let ba = 7;
console.log(!(ab > ba));

//Part 4 Truthy VS Falsy
//1.
let winter = 0;
if (!winter) {
  console.log("Falsy value detected");
}
//2
const greeting = "Hello";
if (greeting) {
  console.log("Truthy value detected");
}

//3
let data = 0 || "Hello";
console.log(data);
