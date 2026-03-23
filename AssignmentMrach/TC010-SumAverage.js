//1. Write a JavaScript program to print even numbers from 1 to 50.
var n = 50;
var sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//2.Write a program to calculate the sum of numbers from 1 to N using a loop.
var n = 100;
var sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to " + n + ":", sum);
var average = sum / n;
console.log("Average of numbers from 1 to " + n + ":", average);

//3. Write a program that calculates the average of numbers from 1 to 100.
var n = 100;
var sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
var average = sum / n;
console.log("Average of numbers from 1 to " + n + ":", average);



// //4. Write a program that finds the sum of all even numbers between 1 and 100.
var n = 100;
// even numbers are divisible by 2, so we can start from 2 and increment by 2
var even = 0;
for (let i = 2; i <= 100; i += 2) {
    even += i;
}
sum += even;
console.log("sum of all even numbers between 1 and " + n + ":", even);


//G00gle source code for sum of even numbers
// console.log("sum of all even numbers between 1 and " + n + ":", even);

// public class EvenSum {
//     public static void main(String[] args) {
//         int sum = 0;
//         for (int i = 1; i <= 100; i++) {
//             if (i % 2 == 0) {
//                 sum += i;
//             }
//         }
//         System.out.println("The sum is: " + sum);
//     }
// }


