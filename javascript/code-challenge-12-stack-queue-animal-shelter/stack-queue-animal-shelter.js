'use strict';
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

class AnimalShelter {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty(){
        if(this.front === null) return true;
        else return false 
    }

    peek() {
        if(this.isEmpty()) return 'Queue is Empty'
        else return this.front.name;
    }

    enqueue(animal){
        if(animal.species !== 'dog'&& animal.species !== 'cat'){
            return `we don't have that species, please enter a cat or a dog.`
        }
        let newAnimal = animal
        if(this.isEmpty()) {
            this.front = newAnimal;
            this.rear = newAnimal;
        } else {
            this.rear.next = newAnimal;
            this.rear = newAnimal;
        }
        this.length++
        return(this)
    }
    dequeue(pref){
        if (pref !== 'dog' && pref !== 'cat') return null
        if(this.isEmpty()) return 'empty queue'
        else {
            if(pref === this.front.species) {
                let temp = this.front;
                this.front = this.front.next;
                temp.next = null;
                this.length--
                return temp.name
            }else {
                let before = {}
                let looper = this.front;
                while (pref !== looper.species){
                    if (looper.next !== null){
                        before = looper
                        looper = looper.next;
                    }
                }
                console.log(before,1111)
                console.log(looper,222)

                before.next = looper.next;
                let temp2 = looper;
                looper = looper.next;
                temp2.next = null;
                this.length--
                return temp2.name
            }
        }
    }
}

class Animal {
    constructor(name,species){
        this.name = name;
        this.species = species;
        this.next = null
    }
}
 
// testing cases (remove the comment over the things you want to use then run on terminal)
// let notAvailable = new Animal('Space','Monkey')
// let Emily = new Animal('emily','cat')
// let nikky = new Animal('nikky','cat')
// let snow = new Animal('snow','cat')
// console.log(Emily)
// let Rex = new Animal('Rex','dog')
// let snoop = new Animal('snoop','dog')
// let ice = new Animal('ice','dog')
// let fire = new Animal('fire','dog')

// let animalShel = new AnimalShelter();

// console.log(animalShel.enqueue(notAvailable))
// animalShel.enqueue(Emily)
// animalShel.enqueue(nikky)
// animalShel.enqueue(snow)
// animalShel.enqueue(Rex)
// animalShel.enqueue(ice)
// animalShel.enqueue(snoop)
// animalShel.enqueue(fire)

// console.log(animalShel)
// console.log(animalShel.dequeue('dog'));
// console.log(animalShel.dequeue('cat'));
// console.log(animalShel)
// console.log(animalShel.front)
// console.log(animalShel.front.next)
// console.log(animalShel.dequeue('asdasd'));

module.exports = {
    Animal,AnimalShelter
}