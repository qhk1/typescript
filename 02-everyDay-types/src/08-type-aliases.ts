type Point = {
    x: number,
    y: number
}

function printPoint(pt: Point) {
    console.log();
}

printPoint({
    x: 100,
    y: 200
})

type ID = number | string;

function printId(id: ID) {

}

printId(100)
printId('hhhhhhhhh')

type UserInput = string

function inputChange(str: string): UserInput {
    return str.slice(0,2);
}

let user = inputChange('abcdefg');