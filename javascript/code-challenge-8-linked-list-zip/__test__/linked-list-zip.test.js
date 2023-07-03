const {Linkedlist , zipList} = require('../linked-list-zip');

describe('Linked lists zipped test function', () => {

  it('Where length of both lists are equal the linked list', () => {
    let ll1 = new Linkedlist;
    let ll2 = new Linkedlist;

    ll1.insert(1);
    ll1.insert(2);
    ll1.insert(3);
    ll2.insert(4);
    ll2.insert(5);
    ll2.insert(6);

    let test = zipList(ll1,ll2);

    expect(test.toString()).toEqual(`{3} -> {6} -> {2} -> {5} -> {1} -> {4} -> NULL`);

  });
  it('Where length of one list is shorter ', () => {
    let ll1 = new Linkedlist;
    let ll2 = new Linkedlist;

    ll1.insert(1);
    ll1.insert(2);
    ll2.insert(4);
    ll2.insert(5);
    ll2.insert(6);

    let test = zipList(ll1,ll2);

    expect(test.toString()).toEqual(`{2} -> {6} -> {1} -> {5} -> {4} -> NULL`);

  });
  it('Where both lists are empty', () => {
    let ll1 = new Linkedlist;
    let ll2 = new Linkedlist;


    let test = zipList(ll1,ll2);

    expect(test.toString()).toEqual(`empty linked list`);

  });


});
