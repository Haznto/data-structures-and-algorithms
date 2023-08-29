# merge-sort mock interview

## Problem domain

Write two function that will work together , one will accept an array and the other will sort that array, so the end result is a returned sorted array using merges sort approach.

Input : array

output: array

## Whiteboard Process

![Linked list white board](./assets/Mock%20Intv%205.jpg)

## Solution

``` javascript
'use strict';

let array = [8,4,23,42,16,15]
function mergeSort(arr){
    let n = arr.length

    if( n > 1 ){

        let mid  = n/2
        let left = arr.slice(0,mid)
        let right = arr.slice(mid,n)

        mergeSort(left)
        mergeSort(right)
        merge(left,right,arr)
    }
    // console.log(arr)
    return arr
}

function merge(left,right,arr){
    let i = 0
    let j = 0
    let k = 0

    while(i<left.length && j < right.length){

        if (left[i] <= right[j]){
            arr[k] = left[i]
            i++
        }else {
            arr[k] = right[j]
            j++
        }
        k++
    }

    if(i === left.length){

        let rightRemain = right.slice(j)
        arr = arr.splice(k,arr.length-k,...rightRemain)

    }else {
        let leftRemain = left.slice(i)
        arr = arr.splice(k,arr.length-k,...leftRemain)
    }
}

```

## For Tests

Navigate to the mock-interview-5 directory and modify testing code inside the mock-interview-5.js.
