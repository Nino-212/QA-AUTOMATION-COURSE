//1
function add(a: number, b: number): number {
  return a + b;
}
add(2, 3);

//2
function printSomeThing(): void {
  console.log("hello");
}
printSomeThing(); // hello

// 3
function calculateTotal(price: number, tax: number = 5): number {
  return price + price * tax;
}
console.log(calculateTotal(100)); // 105
console.log(calculateTotal(100, 0, 1)); // 110 ;
