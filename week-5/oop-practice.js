//🚗 Task 1: Create a Car Class

class Car {
  #fuel = 100;
  static totalCars = 0;
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
    Car.totalCars++;
  }
  drive() {
    this.#fuel -= 10;
  }
  refuel() {
    this.#fuel = 100;
  }
  getInfo() {
    return `This car is a ${this.brand} and price is ${this.price}`;
  }
  //🚗 Task 2: Methods with Parameters
  discount(amount) {
    this.price = this.price - amount;
  }
  isExpensive(limit) {
    if (this.price > limit) {
      return "Expensive";
    } else {
      return "Affordable";
    }
  }
  // 🔹 PART 2: ENCAPSULATION (GETTERS & SETTERS)

  // ## 🔐 Task 3: Controlled Price Access
  get priceTag() {
    return `$${this.price}`;
  }
  set updatePrice(newPrice) {
    if (newPrice < 0) {
      this.price = 0;
    } else {
      this.price = newPrice;
    }
  }
  // # PART 3: ABSTRACTION WITH PRIVATE METHODS
  // ## 🧠 Task 4: Hidden Engine Logic

  drive() {
    this.#consumeFuel();
    console.log("Driving");
  }
  #consumeFuel() {
    this.#fuel -= 10;
  }

  // # 🔹 PART 4: STATIC PROPERTIES & METHODS

  // ## ⚡ Task 5: Car Counter
  static showTotalCars() {
    return Car.totalCars;
  }
}

const car = new Car("BMW", 50000);
car.discount(10000);
console.log(car.getInfo());
console.log(car.isExpensive(30000));
console.log(car.priceTag); // $40000

console.log(Car.showTotalCars());

class ElectricCar extends Car {
  constructor(brand, price, batteryRange) {
    super(brand, price);
    this.batteryRange = batteryRange;
  }
  charge() {
    this.batteryRange = 100;
    console.log("Batterry charged");
  }
}

// # 🔹 PART 6: POLYMORPHISM

// ## 🎭 Task 7: Same Method, Different Behavior
const myCar = new Car("BMW", 50000);
const tesla = new ElectricCar("Tesla", 60000, 100);

myCar.drive();
tesla.drive();

tesla.charge();

// # 🔹 PART 7: MINI CHALLENGE

// ## 🏁 Task 8: Garage Manager

class Garage {
  contructor(garageName) {
    this.garageName = garageName;
    this.cars = [];
  }
  add(car) {
    this.cars.push(car);
  }
  listCars() {
    return this.cars.map((car) => car.brand);
  }
  findExpencive(limit) {
    return this.cars.filter((car) => car.price > limit);
  }
}
