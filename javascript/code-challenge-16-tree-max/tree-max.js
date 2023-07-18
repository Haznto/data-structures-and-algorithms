'use strict';
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const Node = require('./node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }


    preOrder() {
        let preArr = []
        function traverse(node) {
            preArr.push(node.value)

            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return preArr
    }
    inOrder() {
        let inArr = [];
        function traverse(node) {

            if (node.left) {
                traverse(node.left)
            }

            inArr.push(node.value)

            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return inArr
    }
    postOrder() {
        let postArr = []
        function traverse(node) {

            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            postArr.push(node.value)
        }
        traverse(this.root)
        return postArr
    }

    findMax() {
        if (!this.root) return 'Empty Tree'
        let content = this.postOrder()
        let max = Math.max(...content)
        return max
    }
        
}
 // for testing the max

// let newTree = new BinaryTree();

//  let one = new Node(300)
//  let two = new Node(200)
//  let three = new Node(320)
//  let four = new Node(231)
//  let five = new Node(11)
//  let six = new Node(2134)
//  let seven = new Node(215)
//  let eight = new Node(661)
//  let nine = new Node(7655)

//  one.left = five;
//  one.right = nine;
//  five.left = three;
//  nine.left = four;
//  nine.right = seven;
//  three.right = two;
//  three.left = six;
//  four.left = eight;
 
//  newTree.root = one;

//  console.log(newTree.findMax())
//  console.log(newTree.preOrder())
//  console.log(newTree.inOrder())



 module.exports = BinaryTree;