// generate a random 5-digit number and print it to the console

// Generate a random 5-digit number
const randomFiveDigitNumber = Math.floor(10000 + Math.random() * 90000);
console.log(randomFiveDigitNumber);

//Genarate a random 9-digit indian phone number with first digit between 6 and 9 and country code +91
console.log("+91 " + Math.floor(600000000 + Math.random() * 400000000));