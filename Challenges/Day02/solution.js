// Solution 01
function findLargestNumber(array) {
  if (array.length === 0) {
    return null;
  }

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

// Solution 02
function findLargestNumber2(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array);
}

// Testing the functions
console.log(findLargestNumber([1, 2, 3, 4, 5])); //  5
console.log(findLargestNumber([-10, -5, 0, 5])); //  5
console.log(findLargestNumber([])); //  null
console.log(findLargestNumber([100, 200, 50])); //  200
