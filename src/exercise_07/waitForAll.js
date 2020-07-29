/* eslint-disable no-loop-func */
export default function waitForAll (...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  if (promises == null || promises.length === 0) throw new Error('Not all elements are promises.');
  for (let index = 0; index < promises.length; index += 1) {
    if (!(promises[index] instanceof Promise)) throw new Error('Not all elements are promises.');
  }

  const result = [];
  let successCount = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i += 1) {
      promises[i].then((data) => {
        result.push(data);
        successCount += 1;
      }).catch((reason) => {
        result.push(reason);
      }).then(() => {
        if (result.length === promises.length && successCount === promises.length) {
          resolve(result);
        }
        if (result.length === promises.length && successCount < promises.length) {
          reject(result);
        }
      });
    }
  });
}
