// 1. Global Scope

let globalScope = "I am global";
console.log(globalVar);

function printSomething() {
  if (14 > 2) {
    console.log(globalVar);
  }
  console.log(globalVar);
}

printSomething();

//Fuction Scope
function greet() {
  let message = "hello from inside the fuction";
  console.log(message);

  if (14 > 5) {
    console.log(message);
  }
}
greet();
