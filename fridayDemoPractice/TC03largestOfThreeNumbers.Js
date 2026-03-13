// largest of three numbers in JavaScript
const [a=3, b=4, c=5] = process.argv.slice(2).map(n => parseFloat(n));
if ([a, b, c].some(x => isNaN(x))) {
  console.log('Please provide three numeric arguments');
} else {
  let largest = a;
  if (b > largest) largest = b;
  if (c > largest) largest = c;
  console.log(`The largest number is ${largest}`);
}
