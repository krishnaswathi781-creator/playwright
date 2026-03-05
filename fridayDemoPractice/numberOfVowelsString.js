// Program to count the number of vowels in a string

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Get string input from user and count vowels
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (input) => {
  const vowelCount = countVowels(input);
  console.log(`Number of vowels: ${vowelCount}`);
  rl.close();
});
