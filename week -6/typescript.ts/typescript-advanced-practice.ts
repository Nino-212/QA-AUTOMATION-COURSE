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

// 🔹 PART 2: PROMISES + ASYNC/AWAIT

// Task 4: Simple Promise

function validatePassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (password.length >= 8) {
      resolve("Valid password");
    } else {
      reject("Password too short");
    }
  });
}
validatePassword("12345678")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//Task 5: Async Function

async function checkPassword(password: string) {
  try {
    const result = await validatePassword(password);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// # 🔹 PART 3: TYPE ALIASES + UNION TYPES

// Task 6: Literal Type

type OrderStatus = "pending" | "shiped" | "delivered";
let orderStatus: OrderStatus = "pending";

// Task 7: Union Type

type ID = number | string;
let myID: ID = 123456;
let nyID: ID = "AAAbbb";

// # 🔹 PART 4: INTERFACES

// Task 8: Basic Interface

interface User {
  id: number;
  name: string;
  email: string;
}
const userOne: User = {
  id: 1123,
  name: "Nino",
  email: "nino@gmail.com",
};

// Task 9: Optional Property
interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}
const user2: User = {
  id: 1123,
  name: "Nino",
  email: "nino@gmail.com",
};

// Task 10: Extending Interfaces
interface Admin extends User {
  role: "Admin";
  permissions: string[];
}
const Admin: Admin = {
  id: 4562,
  name: "Nino",
  email: "nino@gmail.com",
  role: "Admin",
  permissions: ["read", "write"],
};

//  🔹 PART 5: PICK & OMIT

// Task 11: Pick

type PublicUser = Pick<User, "id" | "name">;
const publicUser: PublicUser = {
  id: 123245,
  name: "Nino",
};

// Task 12: Omit

type PublicUserTwo = Omit<User, "email">;
const publicUserTwo: publicUserTwo = {
  id: 456,
  name: "Nino",
};

// # 🔹 PART 6: TUPLES

// Task 13: Tuple

type UserTuple = [string, number, boolean];

const userData: UserTuple = ["Nino", 42, true];

// # 🔹 FINAL MINI CHALLENGE 🚀

// Task 14: Mini Product System

interface Product {
  id: ID;
  name: string;
  price: number;
  status: OrderStatus;
  discount?: number; // optional
}
// step 2

function applyDiscount(product: Product): Product {
  if (product.discount) {
    product.price = product.price - product.discount;
  }
  return product;
}

// step 3
async function processOrder(product: Product): Promise<string> {
  if (product.status === "pending") {
    return "Order processed";
  } else {
    throw "Order cannot be processed";
  }
}
