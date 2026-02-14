//example 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi, I`am ${this.name} and I`am ${this.age} years old");
  }
}
const alice = new Person("Alice", 25);
console.log(alice);

const bob = new Person("Bob", 30);
console.log(bob);

//exapmle 2

class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  describe() {
    console.log(
      "This phone is a ${this.brsnd} ${this.model} and has a storage of ${this.storage}",
    );
  }
}
const iPhone17 = new Phone("Apple", "iPhone17", "512Gb");
console.log(iPhone17);
const samsungA7 = new Phone("Sumsung", "A17", "256GB");
console.log(samsungA7);
