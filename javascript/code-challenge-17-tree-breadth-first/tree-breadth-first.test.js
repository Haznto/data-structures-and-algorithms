'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const {Node} = require('./tree-breadth-first')
const {BinaryTree} = require('./tree-breadth-first')

let newTree = new BinaryTree();

describe('Testing Tree of only new functionality: breadth first', () => {
    beforeAll(() => {

        let one = new Node('A')
        let two = new Node('H')
        let three = new Node('D')
        let four = new Node('E')
        let five = new Node('B')
        let six = new Node('G')
        let seven = new Node('F')
        let eight = new Node('I')
        let nine = new Node('C')

        one.left = five;
        one.right = nine;
        five.left = three;
        nine.left = four;
        nine.right = seven;
        three.right = two;
        three.left = six;
        four.left = eight;

        newTree.root = one;

    })

    it('returning breadth first Ordered tree values', () => { 
// note coverage will be low, cause I am not testing the other methods than findMax() it was tested in the previous folder if you are interested.
        expect(newTree.breadthFirst()).toEqual([ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

    })
})