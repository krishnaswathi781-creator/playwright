// // 1.Write a program to print the following pattern: 
// // **

var n = 10; // Number of rows in the pattern
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*"; // Append an asterisk to the pattern string
    }
    console.log(pattern); // Print the pattern for the current row
}





// //2. Write a program to print the following pattern: 1 12 123 1234 12345
var n = 10; // Number of rows in the pattern
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j; // Append the current number to the pattern string
    }
    console.log(pattern); // Print the pattern for the current row
}



// Genarate a christmas tree pattern using asterisks (*):
// following pattern:
//               *
//              ***         
//             *****      
//           *********
//          ***********
//         *************
//         *************
//             ||||
//             ||||

var n = 9; // Number of rows for the tree
for (var i = 1; i <= n; i++) {
    var pattern = " ".repeat(n - i) + "*".repeat(2 * i - 1); // Create the pattern for the current row
    console.log(pattern); // Print the pattern for the current row
}
// Print the trunk of the tree
var trunk = " ".repeat(n - 5) + "|||||";
console.log(trunk);
console.log(trunk);


