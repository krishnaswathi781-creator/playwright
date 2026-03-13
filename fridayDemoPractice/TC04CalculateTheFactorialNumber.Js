// Iterative approach
function factorialIterative(n) {
  if (n < 0) return 'Error: Negative number';
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if (n < 0) return 'Error: Negative number';
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log("===== Factorial Program =====\n");

const testNumbers = [0, 1, 5, 10, 12];

console.log("--- Iterative Approach ---");
testNumbers.forEach((num) => {
  const result = factorialIterative(num);
  console.log(`Factorial of ${num} = ${result}`);
});

console.log("\n--- Recursive Approach ---");
testNumbers.forEach((num) => {
  const result = factorialRecursive(num);
  console.log(`Factorial of ${num} = ${result}`);
});

// Test with user input (if running in Node.js with input)
const userInput = 6;
console.log(`\n--- Result for ${userInput} ---`);
console.log(`${userInput}! = ${factorialIterative(userInput)}`);