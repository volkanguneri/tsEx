var greet;
greet = function () {
    console.log('hello world');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
greet();
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
