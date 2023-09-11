/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict'

const Hash = require('../code-challenge-30-hashtables/hash')



function leftJoin(hash1, hash2) {
    if (!hash1 || !hash2) return 'please enter two hash tables'
    let keys1 = hash1.keys()
    // let keys2 = hash1.keys()
    let obj = {}
    keys1.forEach(element => {
        obj[element] = { Synonyms: hash1.get(element), Antonyms: hash2.get(element) }
    });

    return obj
}



let hash1 = new Hash(19)
let hash2 = new Hash(19)

hash1.set('diligent', 'employed')
hash1.set('fond', 'enamored')
hash1.set('guide', 'usher')
hash1.set('outfit', 'garb')
hash1.set('wrath', 'anger')

hash2.set('diligent', 'idle')
hash2.set('fond', 'averse')
hash2.set('guide', 'follow')
hash2.set('flow', 'jam')
hash2.set('wrath', 'delight')

// console.log(hash1.keys())
// console.log(hash2.keys())

console.log(leftJoin(hash1, hash2))

module.exports = { leftJoin, Hash }