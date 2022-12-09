//protected：受保护的

// class Greeter3 {
//     public greet() {
//         console.log(this.getName());
        
//     }

//     protected getName() {
//         return 'hello'
//     }
// }

// class SGreeter extends Greeter3 {
//     public howdy() {
//         console.log(this.getName());
//     }
// }

// const g3 = new SGreeter()
// g3.greet()
// g3.howdy()
// g3.getName()

class Base2 {
    protected m = 10
}

class Derived2 extends Base2 {
    //在子类中可以修改父类中受保护的成员
    m = 15
}

const d2 = new Derived2()
console.log(d2.m);
