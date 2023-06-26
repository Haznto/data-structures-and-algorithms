const LinkedList = require('../linked-list-kth');

describe('Linked lists kth from end test function', () => {
  // two tests at once.
  it('Where k is greater than the length of the linked list', () => {
    let ll = new LinkedList;
    //empty,
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    ll.insert(5);
    // linked list length of 5
    expect(ll.kthFromEnd(15)).toEqual(`The input exceeds the length of the linkedList length is: ${ll.size}`); // k exceeds length case

  });
  //3 tests
  it('Where k and the length of the list are the same & Where k and the length of the list are the same & “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let ll = new LinkedList;
    //empty,
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    ll.insert(5);
    // where counting from 0, the length is 4 or in other words (0,1,2,3,4) = to five elements.
    expect(ll.kthFromEnd(4)).toEqual(5); // k equal to length.
    expect(ll.kthFromEnd(-4)).toEqual('Enter a positive number'); // k is a negative..
    expect(ll.kthFromEnd(3)).toEqual(4); // Happy Case in the middle...

  });
  it('Where the linked list is of a size 1', () => {
    let ll = new LinkedList;
    //empty,
    ll.insert(1);
    // only one element
    expect(ll.kthFromEnd(0)).toEqual(1); // k equal to length.


  });

});
