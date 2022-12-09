"use strict";
function getArea2(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            const exCheck = shape;
            return exCheck;
    }
}
