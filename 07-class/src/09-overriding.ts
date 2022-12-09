//重写方法

class Base {
    greet() {
        console.log('hello');
    }
}

//派生类覆盖基类时需要与其兼容
class Derived extends Base {
    greet(name?: string) {
        if(name === undefined) {
            super.greet(); //指向父类的实例
        } else {
            console.log(name.toUpperCase());
        }
    }
}

// class Derived extends Base {
//     greet(name: string) {
//         console.log(name.toUpperCase());
//     }
// }

const d = new Derived()
d.greet('reader')

const b: Base = d
d.greet()