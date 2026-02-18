//📘 TypeScript Basics Homework
//🔹 PART 1: BASIC TYPES

// Task 1: String Variables

let studentName: string = "Nino";
let course: string = "Tojtech";

// Task 2: Number Variables

let age: number = 58;
let price: number = 105.99;

// Task 3: Boolean Variables

let isStudent: boolean = true;
let isOnline: boolean = false;

// # 🔹 PART 2: THE `any` TYPE

//  Task 4: Flexible Variable

let randomValue: any = 100;
randomValue = "class";
randomValue = true;

// # 🔹 PART 3: TYPE INFERENCE

// Task 5: Let TypeScript Guess the Type

let city = "Moscow";
city = 77; // type number is not assigneble to type string;

// # 🔹 PART 4: TYPED ARRAYS

// Task 6: String Array

let carBrands: string[] = ["BMW", "Mersedes", "Audi", "Tesla"];

// Task 7: Number Array

let score: number[] = [100, 500, 1000, 5000, 1];

// # 🔹 PART 5: TYPED OBJECTS

// Task 8: Simple Object

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Alice",
  age: 22,
  isAdmin: true,
};
console.log(`${user.name} is ${user.age} years old`);

// Task 9: Product Object
