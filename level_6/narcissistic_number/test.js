const narcissistic = require('./index');

test('narcissistic function is defined', () => {
    expect(typeof narcissistic).toEqual('function');
});

test("narcissistic value for 7", () => {
    expect(narcissistic(7)).toEqual(true);
});

test("narcissistic value for 7", () => {
    expect(narcissistic(371)).toEqual(true);
});