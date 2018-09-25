const assert = require('assert');
const List = require ('../lib/array-methods.js');

describe('map', () => {

    function doubleMe(number) {
        return number * 2;
    }

    it('map: returns a List where each item has been transformed according to the callback', () => {
        const list = new List([1, 2, 3]);
        const result = list.map(doubleMe);
        assert.deepEqual(result, [2, 4, 6]);
    });

    it('map: skips holes in the list', () => {
        // eslint-disable-next-line
        const list = new List([1, , 3, 4]);
        const result = list.map(doubleMe);
        // eslint-disable-next-line
        assert.deepEqual(result, [2, , 6, 8]);
    });

});

describe('filter', () => {

    function isEven(number) {
        return number % 2 === 0;
    }

    it('filter: returns a List containing only the elements that meet the criteria in the callback', () => {
        const list = new List([1, 2, 3, 4]);
        const result = list.filter(isEven);
        assert.deepEqual(result, [2, 4]);
    });

});

describe ('findIndex', () => {

    function isGreaterThanNine(number) {
        return number > 9;
    }

    it('findIndex: returns the index of the first element that meets the criteria in the callback', () => {
        // eslint-disable-next-line
        const list = new List([6, , 9, 10, 12]);
        const result = list.findIndex(isGreaterThanNine);
        assert.equal(result, 3);
    });

    it('findIndex: returns false when no elements meet the criteria in the callback', () => {
        const list = new List ([1, 2, 3, 4]);
        const result = list.findIndex(isGreaterThanNine);
        assert.equal(result, -1);
    });

});

describe ('reduce', () => {

    function doubleAndSum(acc, number) {
        return acc + (2 * number);
    }

    it('reduce: returns a single value that is the result of accumulating according to the callback', () => {
        // eslint-disable-next-line
        const list = new List([2, , 3, 4]);
        const result = list.reduce(doubleAndSum);
        assert.equal (result, 18);
    });
});

describe ('every', () => {

    function isANumber(element) {

    }

    it('every: return true when all element me')

});