//Addition
const number = 5 + 2;
console.log(number + 3);

console.log(4 + 3);
// 2. Substraction

console.log(9 - 4);

// 3. Multiplication

console.log(2 * 4);
// 4. Division
console.log(8 / 4);

//5 .Exponention
console.log(2 ** 3);
//6  Modulus (Remainder) operator (остаток от %)
console.log(8 % 3);

//7 Increment operator (+1)

let a = 5; // ->5+1
a++;
console.log(a);

//8 Decrement operator
let b = 11;
b--;
b--;
b--;
b--;
console.log;

//Comperisson Operators  - will give us a boolean type //
////"!"
console.log(8 > 3); //true
console.log(!8 > 3); // false

//1/ Strict equal
console.log(5 === 5); // true
console.log(5 === 8); // false

// 2 Strict NOT  equal
console.log(5 !== 5); //false
console.log(5 !== 8); //true

// 3. Grater than

console.log(20 > 12); //true

// 4. less than
console.log(30 < 20); //false

//5. greater than or equal
console.log(8 >= 4); // true
console.log(8 >= 8); // true

// 6. Less than or equal
console.log(8 <= 4); //falce
console.log(8 <= 8); // true

console.log(5 == "5"); //true
console.log(5 == 5); //true

// Logical Operators
// 1.&& (and) sign - Return true only if both conditions are true
if (5 > 3 && 2 < 4) {
  console.log("Hi, NYC!");
} // true
// Does not ptint anything becouse one of the condition is false
if (5 > 3 && 8 < 4) {
  console.log("Hi, NYC!");
}
// 2. || (or) operator - Returns true if one of rhe condition is true.
if (5 > 3 || 2 < 4) {
  console.log("Hi,Chicago!");
}
