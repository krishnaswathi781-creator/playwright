// Program to sort an array of numbers in ascending order (Bubble Sort)

function bubbleSort(arr) {
  const n = arr.length;

  // Traverse through all array elements
  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage with different arrays
console.log("Array Sorting Program (Bubble Sort)");
console.log("====================================\n");

// Test case 1
const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array 1:", array1);
console.log("Sorted Array 1:", bubbleSort([...array1]));

// Test case 2
const array2 = [5, 2, 8, 1, 9];
console.log("\nOriginal Array 2:", array2);
console.log("Sorted Array 2:", bubbleSort([...array2]));

// // Test case 3
// const array3 = [100, 50, 75, 25, 10];
// console.log("\nOriginal Array 3:", array3);
// console.log("Sorted Array 3:", bubbleSort([...array3]));
