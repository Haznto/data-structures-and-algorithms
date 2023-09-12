/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict'


const Hash = require('../code-challenge-30-hashtables/hash')


function uniqueCharacters(string) {
    if (typeof string !== 'string') return 'enter a string please'
    let hash = new Hash(997)
    let toCheck = string.replace(/\s/g, '').toLowerCase().split('')
    for (let i = 0; i < toCheck.length; i++) {
        if (hash.has(toCheck[i])) return false
        else hash.set(toCheck[i], toCheck[i])
    }
    return true

}

console.log(uniqueCharacters('The quick brown fox jumps over the lazy dog'))
console.log(uniqueCharacters('I love cats'))
console.log(uniqueCharacters('Donald the duck'))
console.log(uniqueCharacters(24))


module.exports = {Hash, uniqueCharacters}