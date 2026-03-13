// Function to print the first 20 Fibonacci numbers
function printFibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}

// Call the function to print first 20 Fibonacci numbers
printFibonacci(20);
