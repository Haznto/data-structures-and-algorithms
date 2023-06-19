'use strict';

// eslint-disable-next-line no-unused-vars
function BinarySearch(arr,key){
  let left = 0;
  let right = arr.length-1;

  while(left <= right){
    let middle = Math.floor((right + left)/2);
    if (arr[middle] === key) return middle;
    if (key > arr[middle]) {
      left = middle +1;
    }
    else{
      right = middle -1;
    }
  }
  return -1;
}
