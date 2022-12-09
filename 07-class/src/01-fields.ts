//类属性

class Point {
    // x: number = 0
    // y: number = 0
x
y
constructor() {
this.x = 0
this.y = 0
}
}



const pt = new Point()
pt.x = 1
pt.y = 10
console.log(pt.x, pt.y);

class OkGreeter {
    name!: string
}