'use strict';

const Node = require('./node');

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
 
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
}


class BinSearchTree extends BinaryTree {
    constructor(){
        super()
    }

    add(value) {
        if (typeof(value) === 'number') {
            if (this.root === null) this.root = new Node(value);
            else {
                let current = this.root
                while (current.value !== value) {

                    if (value > current.value) {
                        if (current.right) current = current.right
                        else {
                            current.right = new Node(value)
                            return;
                        }
                    }

                    if (value < current.value){
                        if (current.left) current = current.left
                        else {
                            current.left = new Node(value)
                            return;
                        }
                    }

                }
                return 'Node exists'
            }
        }
        return 'Enter a number'
        
    }

    contains(value){
        if (typeof (value) === 'number') {
            let current = this.root
            if (current.value === null) return false;
            else if (current.value === value) return true;
            while (current.value !== value) {
                if (value > current.value) {
                    if (current.right) current = current.right
                    else return false
                }
                if (value < current.value) {
                    if (current.left) current = current.left
                    else return false
                }
            }
            return true
        }
        return 'Enter a number'
    }
}


let newSearchTree = new BinSearchTree()

//  console.log(newSearchTree)
newSearchTree.add(30);
newSearchTree.add(24);
newSearchTree.add(36);
newSearchTree.add(76);
newSearchTree.add(22);
newSearchTree.add(13);
newSearchTree.add(60);
newSearchTree.add(77);
newSearchTree.add(33);
newSearchTree.add(1);
newSearchTree.add(0);

 console.log(newSearchTree.add(null));
 console.log(newSearchTree.add(0))

 console.log(newSearchTree)
 console.log(newSearchTree.postOrder())
 console.log(newSearchTree.contains(15))


 module.exports = {
    BinSearchTree, BinaryTree
 }