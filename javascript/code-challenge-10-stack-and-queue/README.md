# Stacks & Queues

*Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.*

*Create a Stack class that has a top property. It creates an empty Stack when instantiated. with pop, push, isEmpty, Peek methods.*

*Create a Queue class that has a front property. It creates an empty Queue when instantiated. with dequeue, enqueue, isEmpty, Peek methods.*

## Whiteboard Process

![Linked list white board](./assets/stack%20and%20queues2.PNG)

## Solution

``` javascript
'use strict'
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

```

## For Tests

run npm test after navigating to the directory of this file.
