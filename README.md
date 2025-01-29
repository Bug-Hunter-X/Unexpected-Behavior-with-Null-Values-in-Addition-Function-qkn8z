# Unexpected Behavior with Null Values in Addition Function

This repository demonstrates a common error in JavaScript related to the handling of null values in a function. The `foo` function is intended to add two numbers, but it incorrectly handles null values by returning 0. This can lead to unexpected results and potential bugs in larger applications.

The `bug.js` file contains the original code with the error.  `bugSolution.js` provides a corrected version that handles null values more gracefully.

## How to Reproduce
1. Clone the repository.
2. Run `node bug.js`. You will see the unexpected output of 0 when either `a` or `b` is null.
3. Run `node bugSolution.js`. You'll observe the improved handling of null values.