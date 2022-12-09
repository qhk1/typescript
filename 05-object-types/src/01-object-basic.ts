//认识对象类型
//匿名方式定义对象
// function greet(person: {name: string, age: number}) {
//     return 'hello ' + person.name;
// }

// interface Person {
//     name: string,
//     age: number
// }

//接口方式定义对象
// function greet(person: Person) {
//     return 'hello ' + person.name;
// }

//类型别名方式定义对象
type Person = {
    name: string,
    age: number
}
function greet(person: Person) {
    return 'hello ' + person.name;
}