//1. Given an array of numbers, write a program to find the largest number using a loop.
var number = [20, 30, 99, 89, 12, 23, 65];
var largest = number[0]; // Initialize largest with the first element of the array
for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i]; // Update largest if the current number is greater
    }
}
console.log("The largest number in the array is: " + largest);



//2.Write a program to count how many numbers in an array are even and odd.

var number = [20, 30, 99, 89, 12, 23, 65];
var evenCount = 0;
var oddCount = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        evenCount++; // Increment even count if the number is even
    } else {
        oddCount++; // Increment odd count if the number is odd
    }
}
console.log("Count of even numbers in the array: " + evenCount);
console.log("Count of odd numbers in the array: " + oddCount);



//3. Write a program to find all numbers greater than 50 in an array.

var number = [20, 30, 99, 89, 12, 23, 65, 23, 73, 87, 91, 45, 55, 78, 34, 56];
console.log("Numbers greater than 50 in the array:");
for (let i = 0; i < number.length; i++) {
    if (number[i] > 50) {
        console.log(number[i]); // Print the number if it is greater than 50
    }
}
