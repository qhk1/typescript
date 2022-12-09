let x1: undefined = undefined
let y1: null = null
// let z: string = undefined

function doSomething(x: string | null) {
    if(x === null) {
        
    } else {
        console.log('x:' + x);
        
    }
}

function liveDang(x?: number | null) {
    console.log(x!.toFixed());
}