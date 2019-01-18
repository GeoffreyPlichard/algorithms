const delete_digit = require('./index');

test('delete_digit function is defined', () => {
    expect(typeof delete_digit).toEqual('function');
});

test('delete digit value for 152', () => {
    expect(delete_digit(152)).toEqual(52);
});

test('delete digit value for 1001', () => {
    expect(delete_digit(1001)).toEqual(101);
});

test('delete digit value for 152', () => {
    expect(delete_digit(10)).toEqual(1);
});