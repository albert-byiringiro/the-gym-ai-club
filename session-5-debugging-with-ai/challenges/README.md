# Challenge 1: The Shopping Cart Bug Hunt

## Overview

This challenge introduces you to using AI to identify and fix common bugs in a simple React shopping cart component. You'll learn fundamental prompting techniques to effectively debug code and understand how AI can be your debugging partner.

## Starting Code

[Shopping Cart Challenge](./online-shop/src/page/ShoppingCart.jsx)

## The Problem

The shopping cart component above has several bugs that are causing it to malfunction. Users have reported:

- The app crashes when they try to view their cart
- Coupon codes aren't working properly
- Items sometimes don't get removed correctly
- The total calculation seems wrong
- Quantity updates behave strangely

A customer complained: "I can't even see my cart total without the page crashing!"

## Your Task

Use prompt engineering techniques to guide an AI coding assistant to:

1. Find all bugs in the shopping cart component
2. Explain what each bug does wrong
3. Show how to fix each bug
4. Provide a working version of the code

## Prompting Techniques to Practice

1. **Direct Bug Finding**: Ask the AI to scan the code for bugs and errors
2. **Step-by-Step Analysis**: Have the AI walk through each function to find issues
3. **Specific Problem Focus**: Ask about particular functions that seem problematic
4. **Code Review Style**: Request the AI to review the code like a senior developer would

## Example Prompts to Try

- "Please review this React shopping cart code and identify any bugs or errors you can find."
- "Walk me through the `calculateTotal` function step by step and tell me if there are any issues."
- "I'm getting a crash when the cart loads. Can you help me figure out why?"
- "The coupon code feature isn't working. Can you spot the problem in the `applyCoupon` function?"

## Hints

- Look carefully at loop conditions and array access
- Check for assignment vs comparison operators
- Pay attention to data types in comparisons
- Notice what happens when quantities reach zero
- Consider edge cases like empty arrays

## Success Criteria

Your solution should:

- Identify at least 4-5 bugs in the code
- Explain why each bug causes problems
- Provide a corrected version that works properly
- Handle edge cases gracefully
- Follow React best practices