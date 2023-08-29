/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict'

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

console.log(mergeSort(array))



module.exports = {
    merge,mergeSort
}