// Solution 01
function reverseString(input) {
  if (input === null || input === undefined) {
    return "";
  }
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

// Solution 02 using .reverse() method
function reverseString2(input) {
  if (input === null || input === undefined) {
    return "";
  }
  const reversed = input.split("").reverse().join("");
  return reversed;
}

// Testing the functions
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("")); // Output: ""
console.log(reverseString("12345")); // Output: "54321"
console.log(reverseString(null)); // Output: ""
console.log(reverseString(undefined)); // Output: ""
