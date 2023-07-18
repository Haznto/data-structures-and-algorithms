# Trees

*Create two classes, one for creating binary trees, and the other is extending from the previous class, to create a binary search tree that has the same methods as the main tree.
The main tree has 3 methods to return an array of the content of the tree in different depth first orders
preOrder, inOrder and postOrder.
the sub Tree should have the same previous methods in addition to 2 new methods, add and contains
add method to add new value in a correct position to the tree and contains is to find whether a value exist in the tree or not.*

## Whiteboard Process

![Linked list white board](./assets/trees%20(1).jpg)

## Solution

``` javascript
'use strict'

class Node {
    constructor(value ,left =null,right =null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }


    preOrder() {
        let preArr = []
        function traverse(node) {
            preArr.push(node.value)

            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return preArr
    }
    inOrder() {
        let inArr = [];
        function traverse(node) {

            if (node.left) {
                traverse(node.left)
            }

            inArr.push(node.value)

            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return inArr
    }
    postOrder() {
        let postArr = []
        function traverse(node) {

            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            postArr.push(node.value)
        }
        traverse(this.root)
        return postArr
    }
}


class BinSearchTree extends BinaryTree {
    constructor(){
        super()
    }

    add(value) {
        if (typeof(value) === 'number') {
            if (this.root === null) this.root = new Node(value);
            else {
                let current = this.root
                while (current.value !== value) {

                    if (value > current.value) {
                        if (current.right) current = current.right
                        else {
                            current.right = new Node(value)
                            return;
                        }
                    }

                    if (value < current.value){
                        if (current.left) current = current.left
                        else {
                            current.left = new Node(value)
                            return;
                        }
                    }

                }
                return 'Node exists'
            }
        }
        return 'Enter a number'
        
    }

    contains(value){
        if (typeof (value) === 'number') {
            let current = this.root
            if (current.value === null) return false;
            else if (current.value === value) return true;
            while (current.value !== value) {
                if (value > current.value) {
                    if (current.right) current = current.right
                    else return false
                }
                if (value < current.value) {
                    if (current.left) current = current.left
                    else return false
                }
            }
            return true
        }
        return 'Enter a number'
    }
}



```

## For Tests

Navigate to the tree directory and run `npm test -- trees.test.js` .
