/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict';
const LinkedList = require('./linkedlist')

class Hash {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        let ASCIISum = key.split('').reduce((accu, curr) => {
            return accu + curr.charCodeAt(0)
        }, 0)

        return ASCIISum * 599 % this.size
    }

    set(key, value) {

        let hashedKey = this.hash(key)

        if (!this.map[hashedKey]) this.map[hashedKey] = new LinkedList()
        this.map[hashedKey].add({ [key]: value })
    }

    get(key) {
        let hashedKey = this.hash(key)
        if (!this.map[hashedKey]) return null

        let found = this.map[hashedKey].find(key)

        return found
    }

    has(key) {
        let hashedKey = this.hash(key)
        if (!this.map[hashedKey]) return false
        let found = this.map[hashedKey].find(key)

        if (found) return true
        else return false
    }

    keys() {

        let allkeys = []
        this.map.forEach(bucket => {
            if (bucket) {
                let keys = bucket.getKeys()
                allkeys.push(...keys)
            }
        })
        return allkeys
    }
}


let HahsedTable = new Hash(19)

HahsedTable.set('Hasan', 'Mugen')
HahsedTable.set('test1', 'val1')
HahsedTable.set('test2', 'val2')
HahsedTable.set('test3', 'val3')
HahsedTable.set('test4', 'val4')
HahsedTable.set('test5', 'val5')
HahsedTable.set('test6', 'val6')

console.log(HahsedTable.map)
console.log(HahsedTable)
console.log(HahsedTable.get('Hasan'))
console.log(HahsedTable.get('test5'))
console.log(HahsedTable.get('notFound'))
console.log(HahsedTable.has('Hasan'))
console.log(HahsedTable.has('test5'))
console.log(HahsedTable.has('notFound'))
console.log(HahsedTable.keys())



module.exports = Hash