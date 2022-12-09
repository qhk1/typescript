//private
//private和protected一样，但不允许从子类中访问该成员

// class Base3 {
//     private x = 10
//     printX() {
//         console.log(this.x);
//     }
// }
// class Derived3 extends Base3 {
//     showX() {
//         console.log(this.x);
//     }
// }

// const d3 = new Derived3()
// console.log(d3.x);

class A {
    private x = 10

    public sameAs(other: A) {
        return other.x === this.x;
    }
}
