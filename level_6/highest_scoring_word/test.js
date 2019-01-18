const high = require('./index');

test('high function is defined', () => {
    expect(typeof high).toEqual('function');
});

test("findOutlier value for 'man i need a taxi up to ubud'", () => {
    expect(high('man i need a taxi up to ubud')).toEqual('taxi');
});

test("findOutlier value for 'what time are we climbing up the volcano'", () => {
    expect(high('what time are we climbing up the volcano')).toEqual('volcano');
});

test("findOutlier value for 'take me to semynak'", () => {
    expect(high('take me to semynak')).toEqual('semynak');
}); 