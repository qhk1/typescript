"use strict";
//类运行中的this
class MyClass {
    constructor() {
        this.name = 'MyClass';
    }
    // getName = () => {
    //     return this.name
    // }
    getName() {
        return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: 'obj',
    getName: c.getName
};
console.log(obj.getName());
