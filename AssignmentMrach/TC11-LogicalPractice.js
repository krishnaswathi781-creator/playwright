//. Write a program that prints numbers from 1 to 50, but replaces:
//multiples of 2 with "Two"
console.log("Numbers from 1 to 50 with replacements:");
var n = 50;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("Two");
    } else if (i % 2 === 0) {
        console.log("Two");
        console.log(i);
    }
}




//2. multiples of 3 with "Three"

var n = 50;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("TwoThree");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else {
        console.log(i);
    }
}

//3. multiples of both with "TwoThree"

var n = 50;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("TwoThree");
    } else if (i % 2 === 0) {

        console.log("Two");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else {
        console.log(i);
    }
}

//4. Write a program to check whether a number is an Armstrong number.
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length; // Get the number of digits   
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits); // Raise the digit to the power of the number of digits and add to sum
        temp = Math.floor(temp / 10); // Remove the last digit
    }
    return sum === num; // Check if the calculated sum is equal to the original number
}

// Test the function with an example
const number = 156; // You can change this number to test with different values
if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}

//5. Write a program that counts how many vowels are present in a string using loops and conditions.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// Test the function with an example
const inputString = "Hello testing World!"; // You can change this string to test with different values
const vowelCount = countVowels(inputString);
console.log("Number of vowels in the string: " + vowelCount);

