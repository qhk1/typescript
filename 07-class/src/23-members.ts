//抽象类和成员

abstract class Base4 {
    abstract getName(): string

    printName() {
        console.log(this.getName());
    }
}

class Derived4 extends Base4 {
    getName() {
        return 'world'
    }
}
const b4 = new Derived4()
b4.getName()
b4.printName()


function greet(ctor: new() => Base4) {
    const instance = new ctor()
    instance.getName()
    instance.printName()
}

greet(Derived4)