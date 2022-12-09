"use strict";
let testString = 'hello world';
testString = 'ffffff';
const constString = 'hello';
// constString = 'ddd'
let myX = 'hello';
// myX = 'wrold'
function printText(s, alignment) {
}
printText('hello', 'left');
// printText('hello', 'center2')
//规定输出只能是-1、0、1
function compare(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({
    width: 100
});
configure('auto');
let b1 = true;
let b2 = false;
const obj1 = {
    count: 0
};
if (true) {
    obj1.count = 100;
}
function handleRequest(url, method) {
}
const req = {
    url: "http: //baidu.com",
    method: 'GET'
};
handleRequest(req.url, req.method);
