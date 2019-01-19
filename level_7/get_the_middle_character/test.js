const getMiddle = require('./index');

test('getMiddle function is defined', () => {
    expect(typeof getMiddle).toEqual('function');
});

test('getMiddle value for "test"', () => {
    expect(getMiddle("test")).toEqual("es");
});

test('getMiddle value for "testing"', () => {
    expect(getMiddle("testing")).toEqual("t");
});

test('getMiddle value for "test"', () => {
    expect(getMiddle("middle")).toEqual("dd");
});

test('getMiddle value for "test"', () => {
    expect(getMiddle("A")).toEqual("A");
});
