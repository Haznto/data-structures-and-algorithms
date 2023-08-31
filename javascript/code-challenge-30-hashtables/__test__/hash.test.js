'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Hash = require('../hash')


describe('Testing Hash Tables ', () => {

    let HahsedTable = new Hash(19)
    beforeAll(() => {

        HahsedTable.set('Hasan', 'Mugen')
        HahsedTable.set('test1', 'val1')
        HahsedTable.set('test2', 'val2')
        HahsedTable.set('test3', 'val3')
        HahsedTable.set('test4', 'val4')
        HahsedTable.set('test5', 'val5')
        HahsedTable.set('nasaH', 'neguM') // handling collision with first set
    })
    it('test hash', () => {

        expect(HahsedTable.hash('Hasan')).toEqual(8) // Successfully hash a key to an in-range value
    })
    it('test set & get', () => { // Setting a key/value to your hashtable results in the value being in the data structure && Retrieving based on a key returns the value stored
        HahsedTable.set('test6', 'val6')
        expect(HahsedTable.get('test6')).toEqual('val6')
        expect(HahsedTable.get('nasaH')).toEqual('neguM') // Successfully retrieve a value from a bucket within the hashtable that has a collision
    })
    
    it('test get something not in hashtable', () => { // Successfully returns null for a key that does not exist in the hashtable

        expect(HahsedTable.get('notFound')).toEqual(null)
    })

    it('test has', () => {

        expect(HahsedTable.has('notFound')).toEqual(false)
    })
    it('test keys', () => { // Successfully returns a list of all unique keys that exist in the hashtable

        expect(HahsedTable.keys()).toEqual([
            'test2', 'test4',
            'test6', 'Hasan',  
            'nasaH', 'test1', 
            'test3', 'test5'
        ])
    })
})