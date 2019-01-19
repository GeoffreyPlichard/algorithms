const order = require('./index');

test('order function is defined', () => {
    expect(typeof order).toEqual('function');
});

test("order value for is2 Thi1s T4est 3a", () => {
    expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
});

test("order value for 4of Fo1r pe6ople g3ood th5e the2", () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual("Fo1r the2 g3ood 4of th5e pe6ople");
});

test("order value for ''", () => {
    expect(order("")).toEqual("");
});