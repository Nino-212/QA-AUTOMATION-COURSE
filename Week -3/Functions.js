console.log("Hello world!");
console.log("Hello world!");

//  Creating a function
function greet() {
  const addition = 2 + 5;
  console.log(addition);
}
greet(); // I am calling the furction

// 2. FUNCTION WITH A SINGLE PARAMETR 
// Name inside paranthesis is called parameter/s
//newGreet - identifier
// {} - function body

function newGreet(name) {
  console.log ("Hello ${name} to the class");
}

newGreet(Nino);


// 3. FUNCTION MULTIPLE PARAMETERS

function add(num1, num2){
  console.log(num1+num2);
}

add(5,2);

// function multiplication 
function mutiplication (num1 * num2) {
  console.log (num1 * num2);
}
mutiplication (4,2);
 

// 4. Default Parameters 

function greetStudent(name = "student") {
  console.log('Hello ${name}, welcome to JavaScript class');

}
greetStudent();
greetStudent("Nino");


// 5. Return

fuction addNewNumbers (num1,num2) {
  return num1 + num2;
}
const functionResult = addNewNumbers(3,6);
console.log(functionResult);


//or
function addNewNumbersTwo(num1, num2){
  const result = num1 + num 2;
  return[];
}

const functionResultTwo = addNewNumbersTwo (3,6);
console.log (functionResult);


// 6. Arrow functions 

const greetStudentTwo = (student)  => {
  console log ('Hello ${student}, welcome to class');
};
greetStudentTwo("Nino");


//or

const substractTwoNumbers = (num1, num 2) => num1-num2;
const resultTwo = substractTwoNumbers (5,3);
console.log (resultTwo+22);

//random number 
fuction generateRandomNumber() {
  return 2;
}
const array = ["blue", "red" "green"];
const generateRandomNumber = generateRandomNumber();
console.log (array [generateRandomNumber]);


