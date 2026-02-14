//Method 1
class ChaseBankAccaunt {
  #balance; //private field;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("Balance cannot be negative!");
    }
  }
}
const account = new BankAccount("Alice", 500);
console.log(account.balance); //5
account.balance = 1000;
console.log(account.balance); //1000
//console.log (accaunt.#balance); // SyntaxError

// Method 2
class CapitalOneAccount {
  #balance; //privet field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("balance cannot be negative!");
    }
  }
}

const accaunt = new BankAccount("Alice", 500);
console.log(accaunt.getBalance()); // 500
account.setBalance(1000);
