'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const {Node} = require('./tree-fizz-buzz')
const {K_ryTree} = require('./tree-fizz-buzz')
const {fizzBuzzTree} = require('./tree-fizz-buzz')
let kTreeTest;
let kTreeTest2;
describe('Testing K-ry Trees', () => {
    beforeAll(() => {

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

        kTreeTest = new K_ryTree(node1);
        kTreeTest2 = new K_ryTree();
    })
    
    it('returning K-ry Tree of Strings FuzzBuzz instead of K-ry Tree of Numbers', () => { 
// note coverage will be low, cause I am not testing the other methods than findMax() it was tested in the previous folder if you are interested.
        expect(fizzBuzzTree(kTreeTest).root.value).toEqual('Buzz'); // accessing the root of new K-ry tree transformed
        expect(kTreeTest.root.children[0].value).toEqual('Buzz'); // accessing the root children value of new K-ry tree transformed (NOTE: The Tree after executing the function change fully.)
        expect(fizzBuzzTree(kTreeTest2)).toEqual('empty K-ry Tree');


    })
})



