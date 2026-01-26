//NUMBERS
//Basic number Operations
console.log(8 + 10); //18
console.log(15 - 2); //13
console.log(6 * 5); //30
console.log(10 / 2); //5
console.log(70 % 2); //0

//Comparing Numbers
console.log(10 > 6); //true
console.log(5 < 2); //false
console.log(5 === 5); //true
console.log(10 !== 2); //true

//Rounding Numbers

//Math.round - Roinds to the nearest whole number
console.log(Math.round(9.9)); //10
console.log(Math.round(5.5)); //6

// Math.floor-always rounds down
console.log(Math.floor(7.9)); //7
console.log(Math.floor(3.2)); //3

//Math.ceil() - Always rounds up
console.log(Math.ceil(5.1)); //6
console.log(Math.ceil(8.9)); //9

//Math.trunc()- Removes the decimal part
console.log(Math.trunc(7.9)); //7
console.log(Math.trunc(-6.9)); //-6

//Formatting Numbers

//.toFixed() - Formats a number to a fixed number of decimal places. Returns a string a string, not a number.

let price = 7.589;
console.log(price.toFixed(2)); //' "7.59"

//Number() - converts a value into a number

console.log(Number("78")); ////42
console.log(Number("abc")); // Not a Number

//parselnt() - Converts a value into an integer by removing decimals.

console.log(parseInt("11.8")); //11

//Converting Numbers

//parseFloat() - Converts a value into a decimal number

console.log(parseFloat("11.5")); //11.5

//Checking Numbers

console.log(isNAN("abc")); //true
console.log(isNAN(15)); // false
