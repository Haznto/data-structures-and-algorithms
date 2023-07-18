'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Node = require('../node')
const BinaryTree = require('../tree-max')

let newTree = new BinaryTree();
let newTree2 = new BinaryTree();
describe('Testing Tree result of max value', () => {
    beforeAll(() => {

        let one = new Node(300)
        let two = new Node(200)
        let three = new Node(320)
        let four = new Node(231)
        let five = new Node(9999)
        let six = new Node(2134)
        let seven = new Node(215)
        let eight = new Node(661)
        let nine = new Node(7655)

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

    it('returning max value of a tree', () => { 
// note coverage will be low, cause I am not testing the other methods than findMax() it was tested in the previous folder if you are interested.
        expect(newTree.findMax()).toEqual(9999);
        expect(newTree2.findMax()).toEqual('Empty Tree');
    })
})