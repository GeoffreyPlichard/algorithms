const grabscrab = require('./index');

test('grabscrab function is defined', () => {
    expect(typeof grabscrab).toEqual('function');
});

test('grabscrab value for "trisf", ["first"]', () => {
    expect(grabscrab("trisf", ["first"])).toEqual(['first']);
});

test('grabscrab value for "oob", ["bob", "baobab"]', () => {
    expect(grabscrab("oob", ["bob", "baobab"])).toEqual([]);
});

test('grabscrab value for "ainstuomn", ["mountains", "hills", "mesa"]', () => {
    expect(grabscrab("ainstuomn", ["mountains", "hills", "mesa"])).toEqual(['mountains']);
});

test('grabscrab value for "oolp", ["donkey", "pool", "horse", "loop"]', () => {
    expect(grabscrab("oolp", ["donkey", "pool", "horse", "loop"])).toEqual(["pool", "loop"]);
});

test('grabscrab value for "ortsp", ["sport", "parrot", "ports", "matey"]', () => {
    expect(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])).toEqual(["sport", "ports"]);
});

test('grabscrab value for "ourf", ["one","two","three"]', () => {
    expect(grabscrab("ourf", ["one","two","three"])).toEqual([]);
});