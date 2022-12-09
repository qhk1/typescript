//类运行中的this


class MyClass {
    name = 'MyClass'
    // getName = () => {
    //     return this.name
    // }
    getName(this: MyClass) {
        return this.name
    }
}

const c = new MyClass();
const obj = {
    name: 'obj',
    getName: c.getName
}
console.log(obj.getName());

