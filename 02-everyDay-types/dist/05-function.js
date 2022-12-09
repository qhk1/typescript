"use strict";
function greet(name) {
    console.log(`hello ${name.toUpperCase()} !!`);
}
greet('xiaoming');
function getNumber() {
    return 26;
}
const names = ['xiaoming', 'hhh', 'ddd'];
names.forEach((item) => {
    console.log(item.toUpperCase());
});
