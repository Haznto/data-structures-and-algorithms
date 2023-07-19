/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
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

// testing lines 

let newQ = new Queue()

// newQ.enQueue(10)
// newQ.enQueue(20)
// newQ.enQueue(30)
// newQ.enQueue(40)
// newQ.enQueue(50)
// newQ.enQueue(60)

// console.log(newQ.front);

console.log(newQ.duck([1,2,3,4,5,6,7,8,9,10],3))