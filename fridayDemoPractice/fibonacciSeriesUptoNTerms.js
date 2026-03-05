// Program to print Fibonacci series up to N terms

function printFibonacciSeries(n) {
  if (n <= 0) {
    console.log("Please enter a positive number");
    return;
  }

  let a = 0;
  let b = 1;

  console.log(`Fibonacci Series up to ${n} terms:`);

  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

// Get the number of terms
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of terms: ", (input) => {
  const n = parseInt(input);
  printFibonacciSeries(n);
  rl.close();
});
