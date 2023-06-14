const { insertShiftArray } = require('../array-insert-shift');

describe('insert function test', () => {
  it('handle insert function', () => {
    let arrayInsert = insertShiftArray([2, 4, 6, -8], 5);
    expect(arrayInsert).toEqual([2, 4, 5, 6, -8]);
  });

  it('handle wrong param function', () => {
    let arrayInsert = insertShiftArray('hello', 2);
    expect(arrayInsert).toEqual('incorrect input : enter an array');
  });
});
