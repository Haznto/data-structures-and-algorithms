/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
'use strict';

const Node = require('./Node');
const BinaryTree = require('./Tree');
const HashMap = require('../code-challenge-30-hashtables/hash');
let one = new Node('150');
let TWO = new Node('75');
let THREE = new Node('100');
let four = new Node('160');
let five = new Node('125');
let six = new Node('200');
let seven = new Node('175');
let eight = new Node('350');
let nine = new Node('250');
let ten = new Node('300');
let elevn = new Node('500');

const tree = new BinaryTree();
tree.root = one;
one.left = THREE;
one.right = nine;
nine.left = six;
nine.right = eight;
eight.right = elevn;
eight.left = ten;

THREE.left = TWO;
THREE.right = four;
four.left = five;
four.right = seven;

const tree2 = new BinaryTree();

let one1 = new Node('42');
let TWO1 = new Node('15');
let THREE1 = new Node('100');
let four1 = new Node('160');
let five1 = new Node('125');
let six1 = new Node('200');
let seven1 = new Node('175');
let eight1 = new Node('350');
let nine1 = new Node('600');
let ten1 = new Node('4');
let elevn1 = new Node('500');

tree2.root = one1;
one1.left = THREE1;
one1.right = nine1;
nine1.left = six1;
nine1.right = eight1;
eight1.right = elevn1;
eight1.left = ten1;

THREE1.left = TWO1;
THREE1.right = four1;
four1.left = five1;
four1.right = seven1;

// console.log(tree.inOrder());
// console.log(tree2.inOrder());



function faretZayton(t1, t2) { // it is the tree-intersection function required in the Lab
    let hashTable = new HashMap(25);
    let treeArr = t1.inOrder();
    let treeArr2 = t2.inOrder();
    treeArr.forEach((element) => {
        hashTable.set(element, parseInt(element));
    });
    treeArr2.forEach((element) => {
        hashTable.set(element, parseInt(element));
    });
    return compareZayton(hashTable.keys());
    //   return hashTable.keys();
}

function compareZayton(hashKeys) {
    let mainArr = hashKeys;
    //   console.log(mainArr);
    let mafroot = [];
    const fixedLength = mainArr.length;
    for (let i = 0; i < fixedLength; i++) {
        let zytonna = mainArr.shift();

        if (mainArr.includes(zytonna) && !mafroot.includes(zytonna))
            mafroot.push(parseInt(zytonna));
    }
    return mafroot;
}
// console.log(faretZayton(tree, tree2))
module.exports = faretZayton;