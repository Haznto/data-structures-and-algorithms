'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const {merge,mergeSort} = require('../mock-interview-5')


describe('Testing merge sort ', () => {
    
    
    it('Returns a sorted array from the input array', () => { 
        
        expect(mergeSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ])
    })
})