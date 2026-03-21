// create a random 5 digit number and print it
function generateRandom5DigitNumber() {
    const min = 10000; // smallest 5-digit number
    const max = 99999; // largest 5-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const random5DigitNumber = generateRandom5DigitNumber();
console.log(random5DigitNumber);
