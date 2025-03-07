<!-- array.sort([compareFunction]); -->

<!-- Without a compare function, sorting is done as strings: -->

<!-- A compare function allows you to define custom sorting logic. The function receives two arguments, a and b, and returns:

Negative Value: If a should come before b.
Positive Value: If a should come after b.
Zero: If a and b are equal (order remains unchanged). -->


const arr = [20, 5, 100, 15];
arr.sort((a, b) => a - b); // Sorts numerically in ascending order
console.log(arr); // Output: [5, 15, 20, 100]