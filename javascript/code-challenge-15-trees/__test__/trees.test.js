'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const {BinaryTree, BinSearchTree} = require('../trees')
const Node = require('../node')


describe('testing normal binary tree', () => {
    let valueNode = new Node(20)
    let normaltree = new BinaryTree();
    let normaltree2 = new BinaryTree(valueNode);

    it('Can successfully instantiate an empty tree', () => {
        expect(normaltree.root).toEqual(null)
    })
    it('Can successfully instantiate a tree with a single root node', () => {
        expect(normaltree2.root.value).toEqual(20)
    })
    

})
let newSearchTree = new BinSearchTree()
describe('testing BinSearch Tree', () => {
beforeAll(()=> {

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

    
})
it('For a Binary Search Tree, can successfully add a left child and right child properly to a node' ,() => { 

    expect(newSearchTree.root.value).toEqual(30)
    expect(newSearchTree.root.left.value).toEqual(24)
    expect(newSearchTree.root.right.value).toEqual(36)
    expect(newSearchTree.add('asdasdawd')).toEqual('Enter a number')
    expect(newSearchTree.add(36)).toEqual('Node exists') // adding duplicates
})
it('Returns true//false for the contains method, given an existing or non-existing node value' ,() => {

    expect(newSearchTree.contains(15)).toEqual(false)
    expect(newSearchTree.contains(-1)).toEqual(false)
    expect(newSearchTree.contains(33)).toEqual(true)
    expect(newSearchTree.contains('asdasdawd')).toEqual('Enter a number')
})
it('Can successfully return a collection from a pre-order traversal // Can successfully return a collection from an in-order traversal // Can successfully return a collection from a post-order traversal)' ,() => {

    expect(newSearchTree.preOrder()).toEqual([30, 24, 22, 13, 1, 0, 36, 33, 76, 60, 77])
    expect(newSearchTree.inOrder()).toEqual([0, 1, 13, 22, 24, 30, 33, 36, 60, 76, 77])
    expect(newSearchTree.postOrder()).toEqual([0, 1, 13, 22, 24, 33, 60, 77, 76, 36, 30])

    
})
})