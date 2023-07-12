'use strict';
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const {Animal , AnimalShelter} = require('../stack-queue-animal-shelter');

describe('AnimalShelter function', () => {

  it('not a cat or dog', () => {
    let notAvailable = new Animal('space','Monkey');
    let emily = new Animal('emily','cat');
    let snopp = new Animal('snoop','dog');
    let rex = new Animal('rex','dog');
    let snow = new Animal('snow','cat');

    let shelter = new AnimalShelter(); 

    shelter.enqueue(emily)
    shelter.enqueue(snopp)
    shelter.enqueue(rex)
    shelter.enqueue(snow)
    expect(shelter.enqueue(notAvailable)).toEqual(`we don't have that species, please enter a cat or a dog.`);
    expect(shelter.front.name).toEqual('emily');
    expect(shelter.front.next.name).toEqual('snoop');
    
    shelter.dequeue('dog')
    expect(shelter.front.next.name).toEqual('rex');

    shelter.dequeue('cat')
    expect(shelter.front.name).toEqual('rex');

    expect(shelter.dequeue('asdasd')).toEqual(null);

  });

});
