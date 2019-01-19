const like = require('./index');

test('like function is defined', () => {
    expect(typeof like).toEqual('function');
});

test("like value for ['Peter']", () => {
    expect(like(['Peter'])).toEqual('Peter likes this');
});

test("like value for ['Jacob', 'Alex']", () => {
    expect(like(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
});

test("like value for ['Max', 'John', 'Mark']", () => {
    expect(like(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this');
});

test("like value for ['Alex', 'Jacob', 'Mark', 'Max']", () => {
    expect(like(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this');
});