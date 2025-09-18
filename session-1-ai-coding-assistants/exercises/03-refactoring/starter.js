// Exercise 3: AI-assisted Refactoring

// This function finds duplicates in an array using a nested loop approach
// It works but is inefficient for large arrays with O(n²) time complexity

// refactor thsi findDuplicates function for me and improve it's performance on the O(n²) time complexity
function findDuplicates(array) {
  const duplicates = new Set();

  const seen = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      duplicates.add(array[i]);
    } else {
      seen.add(array[i]);
    }
  }

  return Array.from(duplicates);
}

// Write a comment asking Copilot to refactor this function to be more efficient
// Suggestion: "Refactor this function to use a hash map approach for O(n) time complexity"

// This function fetches data and processes it with nested callbacks
// It's an example of "callback hell" and could be improved

// refactor featchUserData function to eremove all callback hells. Use proimises to fix it.
async function fetchUserData(userId) {
  const fetchUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = { id: userId, name: "User " + userId };
        console.log("Fetched user:", user);
        resolve(user);
      }, 500);
    });
  };

  const fetchPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ];
        console.log("Fetched posts for user:", userId);
        resolve(posts);
      }, 500);
    });
  };

  const fetchComments = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const comments = [
          { id: 1, text: "Comment 1" },
          { id: 2, text: "Comment 2" },
        ];
        console.log("Fetched comments for posts");
        resolve(comments);
      }, 500);
    });
  };

  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);

  return { user, posts, comments };
}

// Write a comment asking Copilot to refactor this using promises or async/await
// Suggestion: "Refactor this to use async/await for better readability"
