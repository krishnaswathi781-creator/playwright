// reverse a given string in JavaScript
function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = process.argv.slice(2).join(' ');
if (!input) {
  console.log('Please provide a string to reverse');
} else {
  console.log(reverseString(input));
}
