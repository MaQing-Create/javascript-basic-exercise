export default function flattenArray (array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const result = [];
  function flattenArray (array, level) {
    if (array == null) throw new Error('Flatten undefined or null array');
    if (array.length === 0) return result;
    if (level === 2) {
      for (let index = 0; index < array.length; index += 1) {
        if (Array.isArray(array[index])) {
          flattenArray(array[index], 1);
        } else {
          result.push(array[index]);
        }
      }
    }
    if (level === 1) {
      for (let index = 0; index < array.length; index += 1) {
        result.push(array[index]);
      }
    }
  }
  flattenArray(array, 2);
  return result;
}
