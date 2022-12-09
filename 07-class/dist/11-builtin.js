"use strict";
class MsgError extends Error {
    constructor(m) {
        super(m);
        //明确地设置原型
        // Object.setPrototypeOf(this, MsgError.prototype)
    }
    sayHello() {
        return 'hello ' + this.message;
    }
}
const msgError = new MsgError('hello');
console.log(msgError.sayHello());
