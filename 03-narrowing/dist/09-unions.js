"use strict";
// interface Shape {
//     kind: 'circle' | 'square',
//     radius?: number,
//     sideLength?: number
// }
// function getArea(shape: Shape) {
//     if(shape.kind == 'circle') {
//         return Math.PI * shape.radius ** 2
//     }
// }
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
