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
    insert(value) {
        this.head = new Node(value,this.head);
        this.size ++;
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
    toString(){
        let start = this.head;
        if (!this.head){
          return 'empty linked list';
        } else{
          let stringOfValues = '';
          while(start.value ||start.value === 0){
            stringOfValues += `{${start.value}} -> `;
            if(start.next === null) return stringOfValues += 'NULL';
            start = start.next;
          }
        }
      }

      kthFromEnd(k){
        if(k < 0) return 'Enter a positive number'
        let kth = this.size - k;
        if(kth < 0) return `The input exceeds the length of the linkedList length is: ${this.size}`
        let currentNode = this.head
        for(let i = 0; i < kth-1; i++) {
            currentNode = currentNode.next
        }
        // console.log(currentNode.value)
        return currentNode.value
      }
}


let list1 = new Linkedlist();
let list2 = new Linkedlist();
list1.insert(4)
list1.insert(3)
list1.insert(2)
list1.insert(1)
// list2.insert(8)
list2.insert(7)
list2.insert(6)
list2.insert(5)

function zipList (list1,list2) {
    console.log(list1.toString())
    console.log(list2.toString())
    console.log(list2.head)
    console.log(list1.head)
    let zippedLL = new Linkedlist();
    let first = list1.head
    let second = list2.head
    while ( first || second ) {
        if (first) {
            zippedLL.append(first.value)
            first = first.next;
            
        }
        if (second) {
            zippedLL.append(second.value)
            second = second.next;
            
        }
       
            
    }
    console.log(zippedLL)
    console.log(zippedLL.toString())
    
    return zippedLL
    // zippedLL.insert(null)
    // this.size++
}

zipList(list1,list2)
// ll.insert(25)
// ll.insert(26)
// ll.insert(27)
// ll.insert(28)
// ll.insert(30)
// ll.insert(31)
// ll.insert(32)
// ll.insert(33)
// ll.insert(34)
// ll.insert(35)
// ll.append(25)
// ll.append(27)
// ll.insertAfter(21,22)
// ll.insertAfter(22,23)
// ll.insertBefore(22,23)
// ll.insertBefore(22,24)
// ll.insertAfter(21,24)
// ll.insertAfter(22,25)
// console.log(ll);
// console.log(ll.toString());
// console.log(ll.kthFromEnd(-5))
// console.log(ll.head)

module.exports = 
{
    Linkedlist, zipList
}