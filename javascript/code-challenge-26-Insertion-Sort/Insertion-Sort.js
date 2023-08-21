/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict'

function insert(SortedArr, intValue) {
    let i = 0;
    while (intValue > SortedArr[i]) {
        i++
    }

    while (i < SortedArr.length) {
        let temp = SortedArr[i]
        SortedArr[i] = intValue
        intValue = temp
        i++
    }
    SortedArr.push(intValue)
}
function insertSorted(arr) {
   let sorted = [];
   sorted[0] = arr[0]

   for (let i = 1; i < arr.length; i++) {
    insert(sorted, arr[i])
   }

   return sorted
}



console.log(insertSorted([8,4,23,42,16,15]))


module.exports = {
    insert,insertSorted
}