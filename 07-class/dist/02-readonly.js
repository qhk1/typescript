"use strict";
//readonly
class Greeter {
    //constructor构造函数在类实例化时（new 时）自动运行
    constructor(otherName) {
        this.name = 'world';
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = 'bbbb'
    }
}
const g = new Greeter();
console.log(g.name);
