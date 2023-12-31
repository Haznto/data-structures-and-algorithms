# Mock interview 3 Duck Duck Goose

*Create a function inside a queue, that will simulate a Duck Duck Goose game that accepts an array of strings and an int k. Start at the beginning and count up to k and remove the person at that position. Keep counting from that index and count up to k over and over until only one person is left. Return a string with the name of the last person left.*

## Whiteboard Process

![Linked list white board](./assets/mock3duck.jpg)

## Solution

``` javascript
'use strict'

class Node {
    constructor(value){
         this.value = value
         this.next = null
    }
}
class Queue{
    constructor(){
         this.front = null;
         this.rear = null;
    }

    enQueue(ele){
         let newNode = new Node(ele)

         if(this.front === null){
              this.front = newNode
              this.rear = newNode
         }
         else{
              this.rear.next = newNode
              this.rear = newNode
         }
         this.arr.push(ele)
    }


    deQueue(){
         let dele = this.front
         this.front = this.front.next
         dele.next = null

         return dele.value
    }

    duck(arr , init){
     let start = init -1 
     let newArr = arr;

     while(newArr.length > 1 ) {
        if(start > newArr.length - 1){
             start = 0
        }
        newArr = newArr.filter( (element, i ) => i !== start);
        start += init -1 

        console.log(newArr)
   }
    return newArr
  }
}


```

## For Tests

Navigate to the tree directory and run `node mock.js` after changing the test case line with an array of your choose.
