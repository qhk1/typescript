"use strict";
//参数展开运算符-实参展开
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];
arr1.push(...arr2);
console.log(arr1);
// const args = [8, 5,7]
// const angle = Math.atan2(...args)
const args = [8, 5];
const angle = Math.atan2(...args);
