function isPalindrome(str) {
    // Optional: clean and convert string to lowercase for better handling
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Test the function
let str1 = "racecar";
let str2 = "A man, a plan, a canal: Panama";
console.log(`'${str1}' is a palindrome? ${isPalindrome(str1)}`);
console.log(`'${str2}' is a palindrome? ${isPalindrome(str2)}`);
