"use strict";
//抽象类和成员
class Base4 {
    printName() {
        console.log(this.getName());
    }
}
class Derived4 extends Base4 {
    getName() {
        return 'world';
    }
}
const b4 = new Derived4();
b4.getName();
b4.printName();
function greet(ctor) {
    const instance = new ctor();
    instance.getName();
    instance.printName();
}
greet(Derived4);
