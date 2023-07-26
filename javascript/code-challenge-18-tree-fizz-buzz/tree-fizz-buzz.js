/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict';

class Node {
    constructor(value,children = []){
        this.value = value;
        this.children = children;
    }
}

class K_ryTree {
    constructor(root = null){
        this.root = root
    }
}

// -------------------------------------------- building up a k-ry tree
let node1 = new Node(25)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(35)
let node5 = new Node(23)
let node6 = new Node(26)
let node7 = new Node(18)
let node8 = new Node(13)
let node9 = new Node(15)

node1.children.push(node2)
node1.children.push(node3)
node1.children.push(node4)
node2.children.push(node5)
node3.children.push(node6)
node4.children.push(node7)
node4.children.push(node8)
node4.children.push(node9)

let kTree = new K_ryTree(node1);
// let kTreeEmpty = new K_ryTree(); // Empty Tree case && go line 78
//----------------------------------------------- testing contnet of tree
// console.log(kTree)
// console.log(kTree.root)
// console.log(kTree.root.children)
//----------------------------------------------- creating the function
function fizzBuzzTree(kry){
let queue = []
let breadth = []
console.log(kry.root) // before processing
let start = kry.root;
let dequeued;
if (start){
    queue.push(start)
    while(queue.length > 0){
        dequeued = queue.shift()
        breadth.push(dequeued.value) 
        dequeued.value %5 === 0 && dequeued.value %3 === 0?dequeued.value = 'FizzBuzz':
        dequeued.value %5 === 0?dequeued.value = 'Buzz':
        dequeued.value %3 === 0?dequeued.value = 'Fuzz':dequeued.value ='notFuzzingORBuzzing'
        if(dequeued.children){
            queue.push(...dequeued.children)
        }
    }
} else return 'empty K-ry Tree'
let afterTransfrom = breadth.map(element => element %5 === 0 && element %3 === 0?element = 'FizzBuzz': element %5 === 0?element = 'Buzz': element %3 === 0?element = 'Fuzz':element ='notFuzzingORBuzzing' )
console.log(kry.root) // after processing && not needed in the challenge but for clarification
console.log(breadth) // before transforming after traversal(normal values of k-ry tree) && not needed in the challenge but for clarification
console.log(afterTransfrom) // after  transforming after traversal (fuzz/buzz lry-Tree) && not needed in the challenge but for clarification
return kry // new k-ry tree with strings. (THE ONLY NEEDED RESULT) 
}
//--------------------------- NOTE the kTree values all changed after the function so don't execute the function again on the same Tree.
console.log(fizzBuzzTree(kTree)) // for filled case tree 
// console.log(fizzBuzzTree(kTreeEmpty))    // for empty case tree && not needed in the challenge but for clarification


module.exports = {
    K_ryTree,Node,fizzBuzzTree
}