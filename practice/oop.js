class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    greet()("Toyota Camry 2020");
  }
}
const car = new Car ("Totota" "Camry" "2020");
car.describe();
