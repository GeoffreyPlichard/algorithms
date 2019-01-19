const factorial = require('./index');

test('factorial function is defined', () => {
    expect(typeof factorial).toEqual('function');
});

test('factorial value for 0', () => {
    expect(factorial(0)).toEqual(1);
});

test('factorial value for 1', () => {
    expect(factorial(1)).toEqual(1);
});

test('factorial value for 2', () => {
    expect(factorial(2)).toEqual(2);
});

test('factorial value for 3', () => {
    expect(factorial(3)).toEqual(6);
});