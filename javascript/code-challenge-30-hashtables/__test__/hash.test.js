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
    })
    it('test hash', () => {

        expect(HahsedTable.hash('Hasan')).toEqual(8)
    })
    it('test set & get', () => {
        HahsedTable.set('test6', 'val6')
        expect(HahsedTable.get('test6')).toEqual('val6')
    })

    it('test has', () => {

        expect(HahsedTable.has('notFound')).toEqual(false)
    })
    it('test keys', () => {

        expect(HahsedTable.keys()).toEqual([
            'test2', 'test4',
            'test6', 'Hasan',
            'test1', 'test3',
            'test5'
        ])
    })
})