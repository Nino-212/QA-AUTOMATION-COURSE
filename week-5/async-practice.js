//# Week 5 - Assignment 2

// 📘 Asynchronous JavaScript Homework

// 🔹 PART 1: CALLBACKS
// Task 1: Callback Greeting

function prepareGreeting(callback) {
  console.log("Work in progress"); //Work in progress
  setTimeout(() => {
    callback();
  }, 7000);
}
function callPrepareGreeting() {
  console.log("Hello, your greeting is ready");
}
prepareGreeting(callPrepareGreeting); // Hello, your greeting is ready

// 🔹 PART 2: PROMISE BASICS

//  Task 2: Create a Promise

function makePizza() {
  return new Promise((resolve, reject) => {
    console.log("Making your pizza");

    setTimeout(() => {
      const pizzaAvaliable = true;
      if (pizzaAvaliable) {
        console.log("Pizza is ready!");
        resolve("Pizza is ready");
      } else {
        reject("No ingredients");
      }
    }, 5000);
  });
}
makePizza()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 3: Promise with Number Check

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("Even number");
      } else {
        reject("odd number");
      }
    }, 1000);
  });
}
checkNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 🔹 PART 3: ASYNC/AWAIT

// Task 4: Async Breakfast

function makeCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Making your coffee");
    setTimeout(() => {
      const coffee = true;
      if (coffee) {
        resolve("Coffee is ready");
      } else {
        reject("No coffee");
      }
    }, 2000);
  });
}
async function startMorning() {
  const result = await makeCoffee();
  console.log(result);
  console.log("Morning started");
}
startMorning();

// # 🔹 PART 4: TRY…CATCH

// Task 5: Async Error Handling

function makeSandwich(hasBread) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasBread) {
        resolve("Sandwich is ready");
      } else {
        reject("No bread available");
      }
    }, 1000);
  });
}
async function prepLunch() {
  try {
    const result = await makeSandwich(false);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
prepLunch();

// # 🔹 PART 5: PROMISE.ALL

// Task 6: Parallel Tasks

function washCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Car washed");
      resolve();
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Room cleaned");
      resolve();
    }, 1000);
  });
}
function doLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Laundry done");
      resolve();
    }, 3000);
  });
}
async function startChores() {
  await Promise.all([washCar(), cleanRoom(), doLaundry()]);
  console.log("All chores done");
}
startChores();

//# 🔹 FINAL MINI-CHALLENGE

//Task 7: Full Dinner Sequence
function cookRice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rice is ready");
    }, 1000);
  });
}

function cookChicken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("chicken is ready");
    }, 2000);
  });
}

function makeSalad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad is ready");
    }, 3000);
  });
}

async function makeDinner() {
  const result = await Promise.all([cookChicken(), cookRice(), makeSalad()]);
  result.forEach((result) => console.log(result));
  console.log("dinner is ready");
}
makeDinner();
