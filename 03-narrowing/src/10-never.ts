interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    sideLength: number
}

interface triangle {
    kind: "triangle",
    sideLength:  number
}

type Shape2 = Circle | Square | triangle

function getArea2(shape: Shape2) {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;

        case 'square':
            return shape.sideLength ** 2;
        default:
            const exCheck: never = shape
        return exCheck;
    }
}