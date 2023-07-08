/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null
        this.length = 0;
    }

    isEmpty(){
        if(this.top === null) return true;
        else return false 
    }

    peek() {
        if(this.isEmpty()) return 'Stack is Empty'
        else return this.top.value;
    }

    push(value){
        let node = new Node(value)
        if(this.isEmpty()) {
            node.next = this.top;
            this.top = node;
        } else {
            
            node.next = this.top;
            this.top = node;
        }
        this.length++
        return(this)
    }

    pop(){
        if(this.isEmpty()) return 'empty stack'
        else {
            let temp = this.top;
             this.top = this.top.next;
             temp.next = null;
             this.length--
             return temp.value
        }
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

// let newStack = new Stack;

// console.log(newStack.isEmpty())
// console.log(newStack.peek())
// console.log(newStack.push(8))
// console.log(newStack.isEmpty())
// console.log(newStack.push(7))
// console.log(newStack.push(6))
// console.log(newStack.peek())
// console.log(newStack.pop())
// console.log(newStack.peek())

// let newQueue = new Queue;

// console.log(newQueue.isEmpty())
// console.log(newQueue.peek())
// console.log(newQueue.enqueue(8))
// console.log(newQueue.isEmpty())
// console.log(newQueue.enqueue(7))
// console.log(newQueue.enqueue(6))
// console.log(newQueue.peek())
// console.log(newQueue.dequeue())
// console.log(newQueue.peek())
// console.log(newQueue)

module.exports = {
    Node,Stack,Queue
}