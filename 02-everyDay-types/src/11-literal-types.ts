let testString = 'hello world'
testString = 'ffffff'

const constString = 'hello'
// constString = 'ddd'

let myX: 'hello' = 'hello'
// myX = 'wrold'

function printText(s: string, alignment: 'left' | 'right' | 'center') {

}

printText('hello', 'left')
// printText('hello', 'center2')

//规定输出只能是-1、0、1
function compare(a: string, b: string): -1 | 0 | 1 {
    return a == b ? 0 : a > b ? 1 : -1
}


interface options {
    width: number
}

function configure(x : options | 'auto') {

}

configure({
    width: 100
})

configure('auto')

let b1: true = true
let b2: false = false


const obj1 = {
    count: 0
}
if(true) {
    obj1.count = 100
}


function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
    
}

const req = {
    url: "http: //baidu.com",
    method: 'GET'
} as const
handleRequest(req.url, req.method)