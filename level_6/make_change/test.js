const make_change = require('./index');

test('make_change function is defined', () => {
    expect(typeof make_change).toEqual('function');
});

test('make change value for 0', () => {
    expect(make_change(0)).toEqual({});
});

test('make change value for 1', () => {
    expect(make_change(1)).toEqual({"P":1});
});

test('make change value for 43', () => {
    expect(make_change(43)).toEqual({"Q":1,"D":1,"N":1,"P":3});
});

test('make change value for 91', () => {
    expect(make_change(91)).toEqual({"H":1,"Q":1,"D":1,"N":1,"P":1});
});