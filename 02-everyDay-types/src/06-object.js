"use strict";
function prientCord(pt) {
    console.log('x:' + pt.x, 'y: ' + pt.y);
}
// prientCord({
//     x: 3,
//     y: 10
// })
function prientName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
prientName({
    first: 'xiaoming',
    last: ''
});
