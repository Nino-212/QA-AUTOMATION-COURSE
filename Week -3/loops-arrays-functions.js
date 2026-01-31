//Part 1
// 🔁 Task 1 : Print All Elements

let carBrands = ["BMW", "Tesla", "Audi"];

function printCarBrands(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printCarBrands(carBrands);

// 🔁 Task 2: Index + Value
function printCarBrandsAndIndex(arr) {
  for (let i = 0; i <= 2; i++) {
    console.log(i, arr[i]);
  }
}
printCarBrandsAndIndex(carBrands);

// Task 3: First and Last

function firstAndLast(arr) {
  console.log(arr[0]);
  console.log(arr[arr.length - 1]);
}
firstAndLast(carBrands);
