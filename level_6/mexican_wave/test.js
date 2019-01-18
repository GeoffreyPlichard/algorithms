const wave = require('./index');

test('wave function is defined', () => {
    expect(typeof wave).toEqual('function');
});

test("findOutlier value for 'hello'", () => {
    expect(wave('hello')).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
});

test("findOutlier value for 'codewars'", () => {
    expect(wave('codewars')).toEqual(["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
});

test("findOutlier value for ''", () => {
    expect(wave('')).toEqual([]);
});

test("findOutlier value for 'two words'", () => {
    expect(wave('two words')).toEqual(["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
});

test("findOutlier value for ' gap '", () => {
    expect(wave(' gap ')).toEqual([" Gap ", " gAp ", " gaP "]);
});