# Challenge 1: The Refactoring Challenge

## Overview

This challenge focuses on refactoring poorly written code. You'll practice using AI coding assistants to improve code quality incrementally through carefully crafted prompts.

## Starting Code

```javascript
// user-processor.js
function processData(d) {
  var res = [];
  for(var i=0; i<d.length; i++) {
    if(d[i].a == true) {
      var x = d[i].b * 2;
      res.push({id: d[i].id, val: x});
    }
  }
  return res;
}

// Example usage
const userData = [
  {id: 1, a: true, b: 10, name: "John", active: true},
  {id: 2, a: false, b: 20, name: "Alice", active: false},
  {id: 3, a: true, b: 15, name: "Bob", active: true},
  {id: 4, a: true, b: null, name: "Sarah", active: true}
];

// This function is used in multiple places in a larger codebase
// and other developers have complained about it being difficult to understand
// and prone to errors.
```

## The Problem

The function above has several issues:
- Poor variable naming
- No error handling
- No documentation
- Uses outdated JavaScript practices
- No type information
- Unclear purpose

## Your Task

Use prompt engineering techniques to guide an AI coding assistant in refactoring this code. You should:

1. Improve the code incrementally through a series of well-crafted prompts
2. Address all the issues mentioned above
3. Make the function robust and maintainable
4. Ensure the refactored code maintains the original functionality

## Prompting Techniques to Practice

1. **Iterative Refinement**: Start with a general prompt and progressively refine the code through multiple interactions
2. **Specificity**: Be specific about what aspects of the code need improvement in each iteration
3. **Contextual Information**: Provide context about how the function is used
4. **Example-Driven Refinement**: Use examples to clarify behavior expectations

## Hints

- Begin by asking for a basic code review to identify all issues
- Focus on one category of improvements at a time (e.g., naming, error handling, etc.)
- Ask the AI to explain its changes at each step
- Provide additional context as needed throughout the process

## Success Criteria

Your final refactored code should:
- Have clear, descriptive variable and function names
- Include comprehensive error handling
- Be well-documented with JSDoc comments
- Use modern JavaScript practices (ES6+)
- Include TypeScript type annotations (or JSDoc type comments)
- Be more readable and maintainable
- Handle edge cases gracefully
- Maintain the original functionality

## Challenge Difficulty

⭐⭐☆☆☆ (Beginner to Intermediate)

Good luck!