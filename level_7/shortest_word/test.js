const findShort = require('./index');

test('findShort function is defined', () => {
    expect(typeof findShort).toEqual('function');
});

test('findShort value for "bitcoin take over the world maybe who knows perhaps"', () => {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
});

test('findShort value for "turns out random test cases are easier than writing out basic ones"', () => {
    expect(findShort("turns out random test cases are easier than writing out basic ones")).toEqual(3);
});