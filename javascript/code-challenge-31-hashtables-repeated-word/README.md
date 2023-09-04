# HashTables-reapted words

*Create a function that accepts a string, and utilize hash table to check if the word is repeated, and return the first word that got repeated.*

## Whiteboard Process

![Linked list white board](./assets/repeated%20words.jpg)

## Solution

``` javascript
'use strict';
const Hash = require('../code-challenge-30-hashtables/hash')

function repeatedWord(string) {
    let words = string.match(/\b\w+\b/g)
    let table = new Hash(words.length)
    for (const word of words) {
        console.log()
        let keys = table.keys()
        console.log(keys)
        if (keys.includes(word.toLowerCase())) return word
        else table.set(word.toLowerCase())
        console.log(table)
    }
}


```

## For Tests

Navigate to the tree directory and run `npm test -- hash-repeated.test.js` .
