const number = require('./index');

test('number function is defined', () => {
    expect(typeof number).toEqual('function');
});

test('number value for [[10,0],[3,5],[5,8]]', () => {
    expect(number([[10,0],[3,5],[5,8]])).toEqual(5);
});

test('number value for [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]', () => {
    expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17);
});

test('number value for [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]', () => {
    expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
});