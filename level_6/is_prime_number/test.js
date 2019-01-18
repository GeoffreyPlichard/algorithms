const isPrime = require('./index');

test('isPrime function is defiend', () => {
    expect(typeof isPrime).toEqual('function');
});

test("findOutlier value for 0", () => {
    expect(isPrime(0)).toEqual(false);
});

test("findOutlier value for 1", () => {
    expect(isPrime(1)).toEqual(false);
});

test("findOutlier value for 2", () => {
    expect(isPrime(2)).toEqual(true);
});