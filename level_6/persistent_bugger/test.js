const persistence = require('./index');

test('persistence function is defined', () => {
    expect(typeof persistence).toEqual('function');
});

test("persistence value for 39", () => {
    expect(persistence(39)).toEqual(3);
});

test("persistence value for 999", () => {
    expect(persistence(999)).toEqual(4);
});

test("persistence value for 4", () => {
    expect(persistence(4)).toEqual(0);
});