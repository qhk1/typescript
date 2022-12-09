"use strict";
// function printId(id: number | string) {
//     console.log('id:' + id.toUppercase());
// }
// printId(101)
//联合类型
// function welcomePeople(x: string[] | string) {
//     if(Array.isArray(x)) {
//         console.log('hello' + x.join('and'));
//     } else {
//         console.log('hhhhhhhhh' + x);
//     }
// }
// welcomePeople('a')
// welcomePeople(['a', 'b', 'c'])
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree('abcdefg'));
console.log(getFirstThree([1, 2, 3, 4, 5, 6]));
