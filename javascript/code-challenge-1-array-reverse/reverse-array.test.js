
const { reverseArray, recursiveArrayReversal } = require('./reverse-array');


describe('Reverse function test', () => {
  it('handle loop function', () => {
    let arrayRev = reverseArray([1, 2, 3, 4, 5, 6]);
    expect(arrayRev).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it('handle recursive function', () => {
    let arrayRev = recursiveArrayReversal([1, 2, 3, 4, 5, 6]);
    expect(arrayRev).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
