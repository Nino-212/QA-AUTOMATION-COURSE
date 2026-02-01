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

// Part 2 while LOOP (Strings)

// 🔄 Task 4: Loop Through a String

let myFavoriteCity = "New York";
let i = 0;
while (i < myFavoriteCity.length) {
  console.log(myFavoriteCity[i]);
  i++;
}

// 🛑 Task 5: Stop When Found

function stopWhenFound(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log("Found:", arr[i]);
      break;
    }
  }
}
stopWhenFound(carBrands, "Tesla"); //Found: Tesla

//PART 4: for...of LOOP (Value Access)

//🔂 Task 6: Print Values
function printEachValue(carBrands) {
  for (let brand of carBrands) {
    console.log(brand);
  }
}
printEachValue(carBrands);
