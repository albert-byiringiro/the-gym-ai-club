// Exercise 2: Comment-to-Code

// 1. Basic comment
// Function to merge two sorted arrays into one sorted array
const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  return mergedArray;
};

// 2. Detailed comment with parameters and return value
/**
 * Converts a date string from MM/DD/YYYY format to YYYY-MM-DD format
 * @param {string} dateStr - The date string in MM/DD/YYYY format
 * @return {string} - The date string in YYYY-MM-DD format
 */

const convertDateFormat = (dateStr) => {
  const [month, day, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};
// 3. Comment with example inputs and outputs
// Create a function that takes a sentence and returns it with words reversed
// Example: "Hello world" -> "world Hello"

const reverseWords = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};

// 4. Comment with implementation guidance
// Implement a debounce function that limits how often a function can be called
// The function should take a callback function, a delay time in milliseconds,
// and should return a new function that can only be executed once per delay period

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
