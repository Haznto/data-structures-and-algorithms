/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const { Node } = require('../stack-and-queue');
const { Stack } = require('../stack-and-queue');
const { Queue } = require('../stack-and-queue');

describe('Testing Stacks and Queue', () => {
    it('All tests for Stack', () => {
        let newStack = new Stack; // Can successfully instantiate an empty stack

        expect(newStack instanceof Stack).toBeTruthy()
        expect(newStack.peek()).toEqual('Stack is Empty') // Calling pop or peek on empty stack raises exception 
        expect(newStack.pop()).toEqual('empty stack') // Calling pop or peek on empty stack raises exception 

        newStack.push(8) // Can successfully push onto a stack
        expect(newStack.top.value).toEqual(8)

        newStack.push(9) // Can successfully push multiple values onto a stack
        expect(newStack.top.value).toEqual(9)

        expect(newStack.peek()).toEqual(9) // Can successfully peek the next item on the stack

        newStack.pop() // Can successfully pop off the stack
        expect(newStack.top.value).toEqual(8)
        
        newStack.pop() // Can successfully empty a stack after multiple pops
        expect(newStack.isEmpty()).toEqual(true)

    });
    it('All tests for Queues', () => {
        let newQueue = new Queue; // Can successfully instantiate an empty Queue

        expect(newQueue instanceof Queue).toBeTruthy()
        expect(newQueue.peek()).toEqual('Queue is Empty') // Calling pop or peek on empty Queue raises exception 
        expect(newQueue.dequeue()).toEqual('empty queue') // Calling pop or peek on empty Queue raises exception 

        newQueue.enqueue(8) // Can successfully Enqueue into a Queue
        expect(newQueue.front.value).toEqual(8)

        newQueue.enqueue(9) // Can successfully Enqueue multiple values into a Queue
        expect(newQueue.front.value).toEqual(8)

        expect(newQueue.peek()).toEqual(8) // Can successfully peek the next item on the Queue

        newQueue.dequeue() // Can successfully Dequeue out the Queue
        expect(newQueue.front.value).toEqual(9)

        newQueue.dequeue() // Can successfully empty a Queue after multiple Dequeues
        expect(newQueue.isEmpty()).toEqual(true)

    });
});
