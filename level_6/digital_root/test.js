const digitalRoot = require('./index');

test('digitalRoot function is defined', () => {
    expect(typeof digitalRoot).toEqual('function');
});

test("digitalRoot value for 16", () => {
    expect(digitalRoot(16)).toEqual(7);
});

test("digitalRoot value for 456", () => {
    expect(digitalRoot(456)).toEqual(6);
});