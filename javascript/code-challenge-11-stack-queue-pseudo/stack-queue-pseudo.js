/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const {Node, Stack} = require('./stack')
class PseudoQueue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value){
        while (this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(value)
        while(this.stack2.peek()) {
            this.stack1.push(this.stack2.pop())
        }

    }
    denqueue(){
        return this.stack1.pop()
    }
}

// testing values
let newQueue = new PseudoQueue()    

console.log(newQueue.enqueue(15))
console.log(newQueue.enqueue(12))
console.log(newQueue.enqueue(13))
console.log(newQueue.enqueue(14))
console.log(newQueue)
console.log(newQueue.stack1)
console.log(newQueue.denqueue())
console.log(newQueue.stack1)
console.log(newQueue.stack1.front)
console.log(newQueue.stack1.front.next)
