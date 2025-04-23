// Exercise 1: Basic Completion
// For each function below, start typing the implementation
// and observe how GitHub Copilot suggests completions

// 1. Write a function that calculates the factorial of a number
// function factorial(n) {
//   ...start typing here and observe suggestions
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 2. Write a function that checks if a string is a palindrome
// function isPalindrome(str) {
//   ...start typing here and observe suggestions
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// 3. Write a function that filters an array to only include even numbers
// function filterEvenNumbers(numbers) {
//   ...start typing here and observe suggestions
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}