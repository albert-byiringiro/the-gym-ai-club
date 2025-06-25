// Exercise 1: Basic Completion
// For each function below, start typing the implementation
// and observe how GitHub Copilot suggests completions

// 1. Write a function that calculates the factorial of a number
function factorial(n) {
  if (n < 0) {
    return undefined; // Factorial is not defined for negative numbers
  }
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  let result = 1; // Initialize result variable
  for (let i = 2; i <= n; i++) {
    result *= i; // Multiply result by each number from 2 to n
  }
  return result; // Return the final result
}

// 2. Write a function that checks if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join(""); // Reverse the string
  return str === reversedStr; // Check if the string is equal to its reverse
}

// 3. Write a function that filters an array to only include even numbers
function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0); // Filter even numbers using modulo operator
}
