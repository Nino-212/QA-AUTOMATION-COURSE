// # Assignment 2

// 📘 TypeScript Functions + Advanced Homework

// # 🔹 PART 1: TYPED FUNCTIONS

//  Task 1: Price Calculator

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
const sum = calculateTotal(3, 10);
console.log(sum); //30

// Task 2: Greeting with Default Parameter

function greetUser(name: string, role: string = "User"): string {
  return `Hello ${name}, your role is ${role}`;
}
console.log(greetUser("Nino")); // Hello Nino, your role is User

//Task 3: Void Function
function logMessage(message: string): void {
  console.log(`LOG: ${message}`);
}
logMessage("System works");
