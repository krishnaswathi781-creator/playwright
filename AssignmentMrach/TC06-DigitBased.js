//1. Write a program to count the number of digits in a given number.

var num = 1287543345; // 
var count = 0;
while (num !== 0) {
    num = Math.floor(num / 10); // Remove the last digit
    count++; // Increment the count for each digit removed
}

console.log("Number of digits in the given number is: " + count);



//2. Write a program to reverse a number using a loop.

let number = 1029930; // You can change this number to test with different values
let reverse = 23323;
while (number !== 0) {
    let digit = number % 10; // Get the last digit
    reversed = reversed * 10 + digit; // Append the digit to the reversed number
    number = Math.floor(number / 10); // Remove the last digit
}

console.log("Reverse number is: " + reverse);


//3. Write a program to check whether a number is a palindrome or not.

var num = 12321; // You can change this number to test with different values
var originalNum = num;
var reversed = 0;
while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

if (originalNum === reversed) {
    console.log(originalNum + " is a palindrome number.");
} else {
    console.log(originalNum + " is not a palindrome number.");
}           
