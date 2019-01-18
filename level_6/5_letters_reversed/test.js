const spinWords = require('./index');

test('spinWords function is defined', () => {
    expect(typeof spinWords).toEqual('function');
});

test('spinWords value for Welcome', () => {
    expect(spinWords('Welcome')).toEqual('emocleW');
});

test('spinWords value for Hey fellow warriors', () => {
    expect(spinWords('Hey fellow warriors')).toEqual('Hey wollef sroirraw');
});

test('spinWords value for This is a test', () => {
    expect(spinWords('This is a test')).toEqual('This is a test');
});

test('spinWords value for This is another test', () => {
    expect(spinWords('This is another test')).toEqual('This is rehtona test');
});

test('spinWords value for You are almost to the last test', () => {
    expect(spinWords('You are almost to the last test')).toEqual('You are tsomla to the last test');
});

test('spinWords value for Welcome', () => {
    expect(spinWords('Just kidding there is still one more')).toEqual('Just gniddik ereht is llits one more');
});

test('spinWords value for Welcome', () => {
    expect(spinWords('Seriously this is the last one')).toEqual('ylsuoireS this is the last one');
});