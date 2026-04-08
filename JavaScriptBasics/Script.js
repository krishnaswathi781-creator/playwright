// //Variables
// let hero = " chiru"
// console.log(hero);

// let age = 30;
// age = 30 + 1;
// age = "thirty"
// console.log(age)

// let names = ["chiru", "thirty"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // setInterval(() => {
// //     age = age + 1;
// //     console.log(age)
// // })

// let array = [10, 20, 30];

// for (let value of array) {
//     console.log(value);
// }

// for loop
// print numbers from 1 to 5

for (let i = 1; i <= 6; i++) {
    //logic
    console.log(i);
}

//Count Down Timer
console.log("Countdown Timer");
for (let second = 10; second >= 0; second--) {
    if (second === 0) {
        console.log("Happy New Year")

    } else {
        console.log("counting..")
    }
}

// & Calculating exponential
// let base = 2;
// let result = 1;
// let exponent = 8;

// for (let i = 1; i <= exponent; i++) {
//     result = result * base;
//     console.log('${base}^${i}= ${result}')
// }
let base = 2;
let result = 1;
let exponent = 8;

for (let i = 1; i <= exponent; i++) {
    result = result * base;
    console.log(`${base}^${i} = ${result}`);
}