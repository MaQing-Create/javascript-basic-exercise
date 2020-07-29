export default function arrayToList (array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) throw new Error('Creating list from undefined array');
  if (array.length === 0) throw new Error('Creating list from empty array');

  const header = { value: array[0], next: null };
  let curNode = header;

  for (let index = 1; index < array.length; index += 1) {
    const nextNode = { value: array[index], next: null };
    curNode.next = nextNode;
    curNode = nextNode;
  }

  return header;
}
