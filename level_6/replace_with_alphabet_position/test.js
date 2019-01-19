const alphabet = require('./index');

test('alphabet function is defined', () => {
    expect(typeof alphabet).toEqual('function');
});

test('alphabet value for "The sunset sets at twelve o\' clock."', () => {
    expect(alphabet("The sunset sets at twelve o' clock.")).toEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
});

test('alphabet value for "The narwhal bacons at midnight."', () => {
    expect(alphabet("The narwhal bacons at midnight.")).toEqual("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
});
