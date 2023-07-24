'use strict';
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */


class Node {
    constructor(value ,left =null,right =null){
        this.value = value;
        this.left = left;
        this.right = right;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty(){
        if(this.front === null) return true;
        else return false 
    }

    peek() {
        if(this.isEmpty()) return 'Queue is Empty'
        else return this.front.value;
    }

    enqueue(value){
        let node = new Node(value)
        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++
        return(this)
    }
    dequeue(){
        if(this.isEmpty()) return 'empty queue'
        else {
            let temp = this.front;
             this.front = this.front.next;
             temp.next = null;
             this.length--
             return temp.value
        }
    }
}
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

    breadthFirst() {
        let arr = [];
        let breadthQueue = new Queue()
        breadthQueue.enqueue(this.root)

        while(!breadthQueue.isEmpty()){
             let dequeued = breadthQueue.dequeue()
            arr.push(dequeued.value)
            if (dequeued.left !== null) breadthQueue.enqueue(dequeued.left )
            if (dequeued.right!== null) breadthQueue.enqueue(dequeued.right )
        }

        return arr;
    }
}
let newTree = new BinaryTree()

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

console.log(newTree.breadthFirst())


// function breadthFirst(tree) {               as a Function.
//     let arr = [];
//     let breadthQueue = new Queue()
//     breadthQueue.enqueue(tree.root)

//     while(!breadthQueue.isEmpty()){
//          let dequeued = breadthQueue.dequeue()
//         arr.push(dequeued.value)
//         if (dequeued.left !== null) breadthQueue.enqueue(dequeued.left )
//         if (dequeued.right!== null) breadthQueue.enqueue(dequeued.right )
//     }

//     return arr;
// }

module.exports = {
BinaryTree,Node,Queue
}