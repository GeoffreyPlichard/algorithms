const reverseLetter = require('./index');

test('reverseLetter function is defined', () => {
    expect(typeof reverseLetter).toEqual('function');
});

test('reverseLetter value for "krishan"', () => {
    expect(reverseLetter("krishan")).toEqual("nahsirk");
});

test('reverseLetter value for "ultr53o?n"', () => {
    expect(reverseLetter("ultr53o?n")).toEqual("nortlu");
});

test('reverseLetter value for "ab23c"', () => {
    expect(reverseLetter("ab23c")).toEqual("cba");
});

test('reverseLetter value for "krish21an"', () => {
    expect(reverseLetter("krish21an")).toEqual("nahsirk");
});