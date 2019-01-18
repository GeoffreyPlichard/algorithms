const countSmileys = require('./index');

test('countSmileys function is defined', () => {
    expect(typeof countSmileys).toEqual('function');
});

test("countSmileys value for [':D',':~)',';~D',':)']", () => {
    expect(countSmileys([':D',':~)',';~D',':)'])).toEqual(4);
});

test("countSmileys value for [':)',':(',':D',':O',':;']", () => {
    expect(countSmileys([':)',':(',':D',':O',':;'])).toEqual(2);
});

test("countSmileys value for [':D',':~)',';~D',':)']", () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
});