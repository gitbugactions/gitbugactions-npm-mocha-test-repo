const AppMath = require('../../main/js/appMath');
const { expect } = require('chai');

describe('AppMath', () => {
    let appMath;

    beforeEach(() => {
        appMath = new AppMath();
    });

    it('sum adds two numbers correctly', () => {
        expect(appMath.sum(1, 2)).to.equal(3);
    });

    it('subtract subtracts two numbers correctly', () => {
        expect(appMath.subtract(2, 1)).to.equal(1);
    });

    it('multiply multiplies two numbers correctly', () => {
        expect(appMath.multiply(2, 2)).to.equal(4);
    });

    it('sumTwice adds the second number twice', () => {
        expect(appMath.sumTwice(2, 2)).to.equal(6);
    });

    it('subtractTwice subtracts the second number twice', () => {
        expect(appMath.subtractTwice(6, 2)).to.equal(2);
    });
});