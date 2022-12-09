"use strict";
//参数属性
class Params {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const p = new Params(100, 200, 300);
console.log(p.x);
