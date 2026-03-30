// function to generate a random US phone number
// function generateRandomUSPhoneNumber() {
//     const areaCode = Math.floor(Math.random() * 900) + 100; // Area code between 100 and 999
//     const centralOfficeCode = Math.floor(Math.random() * 900) + 100; // Central office code between 100 and 999
//     const lineNumber = Math.floor(Math.random() * 10000); // Line number between 0000 and 9999      


//     // Format the phone number as +1-XXX-XXX-XXXX
//     return `+1-${areaCode}-${centralOfficeCode}-${lineNumber.toString().padStart(4, '0')}`;
// }
// const randomUSPhoneNumber = generateRandomUSPhoneNumber();
// console.log(2,3, 4,5,6,7,8,9,10);


function generateRandomUSPhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const centralOfficeCode = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 10000);

    return `+1-${areaCode}-${centralOfficeCode}-${lineNumber.toString().padStart(4, '0')}`;
}

const randomUSPhoneNumber = generateRandomUSPhoneNumber();
console.log(randomUSPhoneNumber);