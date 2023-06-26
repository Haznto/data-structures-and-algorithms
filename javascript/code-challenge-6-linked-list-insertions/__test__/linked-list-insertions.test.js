const LinkedList = require('../linked-list-insertions');

describe('Linked lists Insertions test function', () => {
  // two tests at once.
  it('Can successfully add a node to the end of the linked list && Can successfully add multiple nodes to the end of a linked list', () => {
    let ll = new LinkedList;
    //empty, so it will add at beginning
    ll.append(12);
    // not empty it will add after 12
    ll.append(24);
    expect(ll.head.value).toEqual(12);
    expect(ll.head.next.value).toEqual(24);
  });
  it('Can successfully insert a node before a node located in the middle of a linked list && Can successfully insert a node before the first node of a linked list', () => {
    // two tests at once.
    let ll = new LinkedList;
    //empty, so it will add at beginning
    ll.append(12); // this is head now (first node)
    ll.insertBefore(12,24); // now head must has the value of 24, since it added it before the 1st node so it becomes first.
    ll.insertBefore(12,18); // this adds a value in the middle, between 24 and 12.
    expect(ll.head.value).toEqual(24);
    expect(ll.head.next.value).toEqual(18);
    expect(ll.head.next.next.value).toEqual(12);
  });
  it('Can successfully insert after a node in the middle of the linked list && Can successfully insert a node after the last node of the linked list', () => {
    // two tests at once.
    let ll = new LinkedList;
    //empty, so it will add at beginning
    ll.append(12); // this is head now (first&last node the same time)
    ll.insertAfter(12,24); // now head must stay the samem the value of 12, since it added it after the last element, it will become last.
    ll.insertAfter(12,18); // this adds a value in the middle, between 24 and 12.
    ll.insertAfter(18,23); // this adds a value in the middle, between 24 and 12.
    expect(ll.head.value).toEqual(12);
    expect(ll.head.next.value).toEqual(18);
    expect(ll.head.next.next.next.value).toEqual(24);
    expect(ll.head.next.next.next).toBeNull;
    expect(ll.head.next.next.value).toEqual(23);
  });
  it('testing edge cases.', () => {
    // two tests at once.
    let ll = new LinkedList; //empty
    let ll2 = new LinkedList; //empty
    //empty, so it will add at beginning
    ll.insertAfter(2,3); // inserting after in an empty linked list will just change the head to the nextValue.
    ll.insertAfter(3,5); //inserting a value after, when the target is the head.
    expect(ll.head.value).toEqual(3);
    expect(ll.head.next.value).toEqual(5);

    ll2.insertBefore(2,3); // do the same but with insertBefore.
    expect(ll2.head.value).toEqual(3); // head is 3
    ll2.insertBefore(3,5); // inserting a value before, when the target is the head.
    expect(ll2.head.value).toEqual(5);

  });



});
