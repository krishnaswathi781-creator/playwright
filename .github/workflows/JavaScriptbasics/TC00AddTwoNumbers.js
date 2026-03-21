// //comments in js
// // add two numbers and print the result
// var a = 1000; 
// var b = 20;
// let c = a+b;
// console.log (c);

// var d= a*b;
// console.log(d);
// let e =a/b;
// console.log(e);


// function addTwoNumbers(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         console.error('Both arguments must be numbers');
//         return;
//     }
//     return a + b;
// }

// // function divideTwoNumbers(a, b) {
// //     if (typeof a !== 'number' || typeof b !== 'number') {
// //         console.error('Both arguments must be numbers');
// //         return;
// //     }
// //     if (b === 0) {
// //         console.error('The second argument cannot be zero');
// //         return;
// //     }

// //     return a / b;
// // }

// // const result = divideTwoNumbers(100, 20);
// // console.log(result);
 
//select browser based on user input
let browser = 'safari';
if (browser === 'chrome') {
    console.log('Launching Chrome browser');
} else if (browser === 'firefox') {
    console.log('Launching Firefox browser');
} else if (browser === 'edge') {
    console.log('Launching Edge browser');
} else if (browser === 'safari') {
    console.log('Browser not supported');
}
