/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
'use strict'

class Node {
    constructor(value,next = null){
        this.value =value;
        this.next = next;
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    

    append(newValue){
        if (this.head === null) {
            this.head = new Node (newValue,null);
            this.size++
        }else {
            let iterative = this.head
    
            while(iterative.next !== null){
                iterative = iterative.next
            }
            iterative.next = new Node (newValue,null);
            this.size++
        }
    }

    insertBefore(value,newValue){
        if (this.head === null) {
            this.head = new Node (newValue,this.head)
            this.size++
        }
        else if (this.head.value === value){
            this.head = new Node (newValue,this.head)
            // let newNode = new Node (newValue,this.head)
            this.size++
        }
        else {
            let current = this.head
            let loopPoint = this.head.next;
            if (loopPoint === null) return console.log('Value Not Found')
            while (value !== loopPoint.value) {
                loopPoint = loopPoint.next
                current = current.next
                if (loopPoint === null) return console.log('Value Not Found')
            }
            let newNode = new Node(newValue,loopPoint)
            current.next = newNode;
            this.size++
        }
    }
    insertAfter(value,newValue){
        if (this.head === null) {
            this.head = new Node (newValue ,this.head)
            this.size++
        }
        else if (this.head.value === value){
             
            this.head.next = new Node (newValue ,this.head.next);
            this.size++
        }
        else {
            // let current = this.head
            let loopPoint = this.head.next;
            if (loopPoint === null) return console.log('Value Not Found')
            while (value !== loopPoint.value) {
                loopPoint = loopPoint.next
                if (loopPoint === null) return console.log('Value Not Found')
                // current = current.next
            }
            loopPoint.next = new Node(newValue,loopPoint.next)
            this.size++
        }
    }
}


let ll = new Linkedlist();
// ll.append(25)
// ll.append(27)
// ll.insertAfter(21,22)
// ll.insertAfter(22,23)
// ll.insertBefore(22,23)
// ll.insertBefore(22,24)
// ll.insertAfter(21,24)
// ll.insertAfter(22,25)
console.log(ll);
console.log(ll.head)

module.exports = Linkedlist