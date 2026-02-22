function greet(name: string, age: number) {
  console.log(`Hi my name is ${name} and I am {age} years old`);
}
greet("Alice", 25);

// Promise function
function checkBalance(amount: number): Promise<string> {
  const balance = 500;
  if (amount <= balance) {
    return Promise.resolve(`Withdrawl of ${balance - amount}`);
  } else {
    return Promise.reject("Insufficient funds");
  }
}

// Async //await eith Promise Fuction

async function performWithdrawal() {
  try {
    const result = await checkBalance(200);
    console.log(result); // Withdrawal of 200 $ succsessful. Remaining balance: $300
  } catch (error) {
    console.error(error); // Insufficient funds
  }
}

performWithdrawal();
