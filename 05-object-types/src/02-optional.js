"use strict";
// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos;
//     let yPos = opts.yPos;
//     console.log(xPos);
// }
// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//     let yPos = opts.yPos === undefined ? 0 : opts.yPos;
//     console.log(xPos);
// }
function paintShape({ shape: Shape, xPos: number = 0, yPos = 0 }) {
    // let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    // let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(Shape, number);
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
