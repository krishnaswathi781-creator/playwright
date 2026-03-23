//  reverse a given string in JavaScript

// function reverseString(str) {
//     return [...str].reverse().join('');
// }

// console.log(Hello, World, any())

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    console.log(input.split('').reverse().join(''));
    rl.close();
});
