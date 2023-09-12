'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const { uniqueCharacters, Hash } = require('../unique-characters')


describe('Testing Hash Tables ', () => {


    it('test Unique Char1 falsy case', () => {
        expect(uniqueCharacters('The quick brown fox jumps over the lazy dog')).toEqual(false)
    })
    it('test Unique Char2 truthy case', () => {
        expect(uniqueCharacters('I love cats')).toEqual(true)
    })
    it('test Unique Char3 not a string case', () => {
        expect(uniqueCharacters(24)).toEqual('enter a string please')
    })


})