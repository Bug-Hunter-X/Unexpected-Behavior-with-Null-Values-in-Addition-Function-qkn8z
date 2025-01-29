function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for null values
  }
  return a + b;
}

console.log(foo(5, 5)); // Output: 10
try {
  console.log(foo(null, 5)); // Throws an Error
} catch (e) {
  console.error(e); // Handles the error
}
try {
  console.log(foo(5, null)); // Throws an Error
} catch (e) {
  console.error(e); // Handles the error
}

//Alternative solution (returns 0 only if both values are null):
function fooAlternative(a,b) {
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}
console.log(fooAlternative(5,5)); // Output: 10
console.log(fooAlternative(null,5)); // Output: 5
console.log(fooAlternative(null, null)); //Output: 0