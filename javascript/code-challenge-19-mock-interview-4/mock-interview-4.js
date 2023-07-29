/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */



'use strict';
const {BinaryTree} = require('./trees')
const Node = require('./node')
function compareTrees(tree1, tree2) {
    let counter = 0;
    function traverse(treeRoot) {

        if (!treeRoot.left && !treeRoot.right) {
            counter++
        }
        else if (treeRoot.left && treeRoot.right) {
            traverse(treeRoot.left)
            traverse(treeRoot.right)
        }
        else if (treeRoot.left && !treeRoot.right) traverse(treeRoot.left)
        else if (!treeRoot.left && treeRoot.right) traverse(treeRoot.right)

        return counter

    }

    let tree1Counter = traverse(tree1.root)
    counter = 0;
    let tree2Counter = traverse(tree2.root)
   
    return tree1Counter === tree2Counter
}

// Testing Code--------------------------------------------------------

// let newNode1 = new Node('Folder')
// let newNode2 = new Node('file')
// let newNode3 = new Node('Folder')
// let newNode4 = new Node('Folder')
// let newNode5 = new Node('Folder')
// let newNode6 = new Node('file')
// let newNode7 = new Node('file')
// let newNode8 = new Node('file')
// let newNode9 = new Node('file')
// // let newNode10 = new Node('Folder')

// newNode1.left = newNode3
// newNode1.right = newNode4
// newNode4.right = newNode2
// newNode4.left = newNode9
// newNode3.right = newNode5
// newNode5.left = newNode7
// newNode5.right = newNode8
// newNode3.left = newNode6

// let newTree = new BinaryTree(newNode1)
// let newTree2 = new BinaryTree(newNode1) 

// let newNode10 = new Node('Folder')
// let newNode12 = new Node('file')
// let newNode13 = new Node('Folder')
// let newNode14 = new Node('Folder')
// let newNode15 = new Node('Folder')
// let newNode16 = new Node('file')
// let newNode17 = new Node('file')
// let newNode18 = new Node('file')
// let newNode19 = new Node('file')

// newNode10.left = newNode13
// newNode10.right = newNode14
// newNode14.right = newNode12
// newNode14.left = newNode19
// newNode13.right = newNode15
// newNode15.left = newNode17
// newNode15.right = newNode18
// newNode13.left = newNode16

// console.log(compareTrees(newTree,newTree2))

// let newTree3 = new BinaryTree(newNode1)
// newTree3.root.left = null
// let newTree4 = new BinaryTree(newNode10)
// console.log(newTree3,newTree4)

// console.log(compareTrees(newTree3,newTree4))
