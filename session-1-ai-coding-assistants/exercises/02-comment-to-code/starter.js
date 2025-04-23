// Exercise 2: Comment-to-Code

// 1. Basic comment
// Function to merge two sorted arrays into one sorted array

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = []; // Initialize an empty array to hold the merged result
  let i = 0; // Pointer for the first array
  let j = 0; // Pointer for the second array

  // Loop until we reach the end of either array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]); // Add the smaller element to the merged array
      i++; // Move the pointer in the first array
    } else {
      mergedArray.push(arr2[j]); // Add the smaller element to the merged array
      j++; // Move the pointer in the second array
    }
  }

  // If there are remaining elements in either array, add them to the merged array
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray; // Return the merged sorted array
}

// 2. Detailed comment with parameters and return value
/**
 * Converts a date string from MM/DD/YYYY format to YYYY-MM-DD format
 * @param {string} dateStr - The date string in MM/DD/YYYY format
 * @return {string} - The date string in YYYY-MM-DD format
 */

function convertDateFormat(dateStr) {
  const [month, day, year] = dateStr.split("/"); // Split the input string into components
  return `${year}-${month}-${day}`; // Return the formatted date string
}

// 3. Comment with example inputs and outputs
// Create a function that takes a sentence and returns it with words reversed
// Example: "Hello world" -> "world Hello"

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" "); // Split the sentence into words, reverse them, and join them back
}

// 4. Comment with implementation guidance
// Implement a debounce function that limits how often a function can be called
// The function should take a callback function, a delay time in milliseconds,
// and should return a new function that can only be executed once per delay period
