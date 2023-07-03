# Linked Lists Zipped List

Creating a function that accepts two linked list as parameters, and then return a zipped linked list of both linked list values.

Input : (linked list 1, linked list 2)

Output: Zipped linked list

## Whiteboard Process

![Linked list white board](./assets/Zipped%20List.jpg)

## Solution

``` javascript
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


    function zipList (list1,list2) {
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
    return zippedLL
    }
}

```

## For Tests

run npm test after navigating to the directory of this file.
