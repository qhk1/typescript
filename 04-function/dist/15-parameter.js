"use strict";
//参数展开运算符-形参展开
function multiply(n, ...m) {
    return m.map(item => {
        return n * item;
    });
}
const a = multiply(10, 2, 3, 4, 5, 6);
console.log(a);
