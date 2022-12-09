"use strict";
//接口
// interface Point2 {
//     x: number,
//     y: number
// }
// function printPoint2(pt: Point2) {
// }
// printPoint2({
//     x: 100,
//     y: 200
// })
// //扩展接口
// interface animal {
//     name: string
// }
// interface Bear extends animal {
//     honey: boolean
// }
// const bear: Bear = {
//     name: 'winie',
//     honey: false
// }
// console.log(bear.name);
// console.log(bear.honey);
//type 交叉扩展
// type animal = {
//     name: string
// }
// type Bear = animal & {
//     honey: boolean
// }
// const bear: Bear = {
//     name: 'winie',
//     honey: false
// }
//向现有的类型添加字段
// interface myWindow {
//     count: number
// }
// interface myWindow {
//     title: string
// }
// const w: myWindow = {
//     count: 100,
//     title: 'ffffff'
// }
//类型创建之后无法更改
// type myWindow = {
//     title: string
// }
// type myWindow = {
//     count: number
// }
