export function range (start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const result = [];
  let step = 1;
  if (start > end) {
    step = -1;
  }
  for (let arrayNum = start; arrayNum !== end; arrayNum += step) {
    result.push(arrayNum);
  }

  return result;

  throw new Error('Please delete this line and implement the function');
}

export function sum (...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (numbers == undefined || numbers.length === 0) return 0;
  return numbers.reduce((pre, cur) => pre + cur);

  throw new Error('Please delete this line and implement the function');
}
