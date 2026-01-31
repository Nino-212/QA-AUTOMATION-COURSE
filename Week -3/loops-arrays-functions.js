let carBrands = ["BMW", "Tesla", "Audi"];

function printCarBrands(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printCarBrands(carBrands);

function printCarBrandsAndIndex(arr) {
  for (let i = 0; i <= 2; i++) {
    console.log(i, arr[i]);
  }
}
printCarBrandsAndIndex(carBrands);
