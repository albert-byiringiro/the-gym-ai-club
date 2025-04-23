// Exercise 2: Comment-to-Code

// 1. Basic comment
// Function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // these are too much while loops... cna you try to use es6 here and make it more readable?
  mergedArray.push(
    ...[...arr1.slice(i), ...arr2.slice(j)].sort((a, b) => a - b)
  );

  mergedArray.push(...arr1.slice(i));
  mergedArray.push(...arr2.slice(j));

  return mergedArray;
}

// 2. Detailed comment with parameters and return value
/**
 * Converts a date string from MM/DD/YYYY format to YYYY-MM-DD format
 * @param {string} dateStr - The date string in MM/DD/YYYY format
 * @return {string} - The date string in YYYY-MM-DD format
 */
function convertDateFormat(dateStr) {
  const [month, day, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
}

// 3. Comment with example inputs and outputs
// Create a function that takes a sentence and returns it with words reversed
// Example: "Hello world" -> "world Hello"
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.reverse();
  return reversedWords.join(" ");
}

// 4. Comment with implementation guidance
// Implement a debounce function that limits how often a function can be called
// The function should take a callback function, a delay time in milliseconds,
// and should return a new function that can only be executed once per delay period
function debounce(callback, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
