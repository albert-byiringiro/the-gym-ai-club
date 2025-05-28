// Exercise 3: AI-assisted Refactoring

// This function finds duplicates in an array using a nested loop approach
// It works but is inefficient for large arrays with O(n²) time complexity
function findDuplicates(array) {
  const duplicates = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }

  return duplicates;
}

// Write a comment asking Copilot to refactor this function to be more efficient
// Refactor this function to use a hash map approach for O(n) time complexity

function findDuplicates(array) {
  const duplicates = [];
  const seen = new Set();

  for (const item of array) {
    if (seen.has(item) && !duplicates.includes(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  }

  return duplicates;
}

// This function fetches data and processes it with nested callbacks
// It's an example of "callback hell" and could be improved
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "User " + userId };
    console.log("Fetched user:", user);

    setTimeout(() => {
      const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ];
      console.log("Fetched posts for user:", userId);

      setTimeout(() => {
        const comments = [
          { id: 1, text: "Comment 1" },
          { id: 2, text: "Comment 2" },
        ];
        console.log("Fetched comments for posts");

        callback(user, posts, comments);
      }, 500);
    }, 500);
  }, 500);
}

// Write a comment asking Copilot to refactor this using promises or async/await
// Refactor fetchUserData to use async/await for better readability and maintainability

async function fetchUserData(userId) {
  const fetchUser = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const user = { id: userId, name: "User " + userId };
        console.log("Fetched user:", user);
        resolve(user);
      }, 500);
    });

  const fetchPosts = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ];
        console.log("Fetched posts for user:", userId);
        resolve(posts);
      }, 500);
    });

  const fetchComments = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const comments = [
          { id: 1, text: "Comment 1" },
          { id: 2, text: "Comment 2" },
        ];
        console.log("Fetched comments for posts");
        resolve(comments);
      }, 500);
    });

  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();

  return { user, posts, comments };
}
