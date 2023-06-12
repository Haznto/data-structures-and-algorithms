'use strict';

function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

function recursiveArrayReversal(arr, arr2 = []) {
  if (arr.length === 0) {
    return arr2;
  }
  arr2.push(arr.pop());
  return recursiveArrayReversal(arr, arr2);
}
module.exports = {
  reverseArray,
  recursiveArrayReversal
};
