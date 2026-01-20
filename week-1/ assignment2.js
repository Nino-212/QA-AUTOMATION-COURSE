//PART A:Data Types:
//String:"Hello, World"
//Number:42
//Boolean: true
//Null: null
//Array: [1,2,3]
//Object: {name: "Alex", age 20}
let greeting = "Hello, World";
let numberOfApartment = 42;
let russiaIsFailedState = true;
let myUnderstandingOfProgramming = null;
let listOfDreams = [1, 2, 3];
let personsProfile = { name: "Alex", age: 20 };
console.log({
  greeting,
  numberOfApartment,
  russiaIsFailedState,
  myUnderstandingOfProgramming,
  listOfDreams,
  personsProfile,
});

//Create Variables
let myFavoriteMovie = "Life is Beautiful";
let myAge = 42;
// Reassigning  a value to the variables:
myFavoriteMovie = "Melancholia";
myAge = 102;
let iLikeJavaScript = true;
let myQaJob;
let myPet = null;

console.log({ myFavoriteMovie, myAge, iLikeJavaScript, myQaJob, myPet });
//3. a)Primitive vs Non - Primitive:
//primitive (a - string; c - number):
let a = "JS";
let c = 100;
//Non primitive (b - array; d - object):
let b = [10, 20];
let d = { city: "Paris" };
console.log({ a, c, b, d });
// b) arrays and object are non-primitive because they can hold multiple values and they are muteble (can be modified after creation)

// 4. Modify the Value:
let x = "Hello";
let y = x;
y = "Hi";
// a) Yhe value of x is "Hello"
// b) this is primitive. Strings are primitive data type and copied by value.
console.log(x, y);

//5. Array

let studentsAge = [20, 40, 60, 80, 100];
let isConsolelog = [true, false, true, false, true];
let tojTechStudents = ["Nino", "Su", "Akbarali", "Richard", "Kyaw"];
console.log(studentsAge, isConsolelog, tojTechStudents);

// 6.Object
const theBestCar = {
  brand: "BMW",
  model: "X5",
  year: 2026,
  isAutomatic: true,
  carInterioroOptions: ["dinosaur leather", "unicorn leather"],
};

console.log(theBestCar);
// Access 2 properties
console.log(theBestCar.brand);
console.log(theBestCar.carInterioroOptions);

const judgmentalBook = {
  title: "How to Become Productive",
  author: "Someone Successful",
  pages: 1000,
  isUnread: true,
  reasonsNotRead: [
    "too much homework from Tohir",
    "will start on Monday",
    "exist for demotivation only",
  ],
};
console.log(judgmentalBook);
console.log(judgmentalBook.reasonsNotRead);
console.log(judgmentalBook.isUnread);

let mockInterviewFail = {
  candidate: "Nino",
  interviewerMood: "fairfull",
  confidenceLevel: 3,
  forgotEnglishWords: true,
  favoriteAnswers: ["it depends", "good question", "can you repeat please"],
};

console.log(mockInterviewFail);
console.log(mockInterviewFail.forgotEnglishWords);
console.log(mockInterviewFail.favoriteAnswers);

//PART B: Control Flow
//7 If statement
let number = 7;
if (number > 0) {
  console.log("Positive number");
}

//8. If - Else
let isCoffeeDrunk = true;
if (isCoffeeDrunk) {
  console.log("I am ready to study");
} else {
  console.log("I need coffee ASAP");
}

// 9. Else if
let score = 85;

if (score > 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 10 Switch Statement
let month = "January";

switch (month) {
  case "January":
    console.log("Winter month");
    break;

  case "April":
    console.log("Spring month");
    break;

  case "July":
    console.log("Summer month");
    break;

  default:
    console.log("Unknown month");
}

//let month = "April";

switch (month) {
  case "January":
    console.log("Winter");

  case "April":
    console.log("Spring");

  case "July":
    console.log("Summer");

  default:
    console.log("End of switch");
}

// 11 challange
// I excluded the specific cases first and used else for numbers >= 100.
let age = 100;

if (age < 0) {
  console.log("Negative number, we don't care");
} else if (age <= 9) {
  console.log("Single digit number");
} else if (age <= 99) {
  console.log("Double digit number");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else",
  );
}
