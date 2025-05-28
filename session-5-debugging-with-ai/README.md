# Challenge 3: The Debugging Mystery

## Overview

This challenge focuses on using AI to help identify and fix non-obvious bugs in a React application. You'll practice using different prompting techniques to effectively debug code that appears reasonable at first glance but contains several subtle issues.

## Starting Code

[User App repository](./exercises/user-app)

## The Problem

The React component above has several bugs that are causing performance issues, unexpected behavior, and potential errors. The component:

- Re-renders excessively
- May cause infinite API calls
- Has potential null reference errors
- Contains accessibility issues
- Has prop validation issues
- Includes inconsistent state management
- Contains other subtle bugs

A teammate has reported that the profile sometimes flickers and the app becomes sluggish when navigating to this page.

## Your Task

Use prompt engineering techniques to guide an AI coding assistant to:

1. Identify all the bugs in this component
2. Explain the root cause of each issue
3. Provide a fixed version of the code
4. Explain the reasoning behind each fix

## Prompting Techniques to Practice

1. **Role-Based Prompting**: Ask the AI to analyze the code as if it were an experienced React developer or performance optimization specialist
2. **Chain of Thought**: Guide the AI to think through the component lifecycle and execution flow
3. **Systematic Analysis**: Direct the AI to examine different aspects of the code (state management, effects, rendering, etc.)
4. **Diagnostic Prompting**: Ask targeted questions about specific parts of the code

## Hints

- Start by asking the AI to review the component for common React anti-patterns
- Focus on the `useEffect` hooks and their dependency arrays
- Look for potential state inconsistencies
- Consider how the component would behave with different prop values
- Think about the render cycle and when API calls are made

## Success Criteria

Your solution should:

- Identify at least 5 distinct bugs or issues in the code
- Provide clear explanations of why each issue is problematic
- Offer a fully fixed version of the component
- Include best practices for React development
- Ensure the component is performant and error-free