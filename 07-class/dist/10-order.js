"use strict";
//初始化顺序
/*
1.基类的字段被初始化；
2.基类构造函数运行；
3.派生类的字段被初始化；
4.派生类构造函数运行；
*/
class Base1 {
    constructor() {
        this.name = 'hello';
        console.log(this.name);
    }
}
class Derived1 extends Base1 {
    constructor() {
        super();
        this.name = 'world';
        console.log(this.name);
    }
}
const d1 = new Derived1();
