//条件类型

// interface Animal {
//     live(): void
// }
// interface Dog extends Animal {
//     woof(): void
// }
// type Example1 = Dog extends Animal ? number : string;  //type Example1 = number
// type Example2 = RegExp extends Animal ? number : string; //type Example2 = string


interface IdLabel {
    id: number
}
interface NameLabel {
    name: string
}
// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//     let myId: IdLabel = {
//         id: 100
//     }
//     return myId
// }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw ''
}

let a1 = createLabel('typescript'); //type a1 = NameLabel
let a2 = createLabel(200); // type a2 = IdLabel
let a3 = createLabel(Math.random() > 0.5 ? 'hello' : 100); //type a3 = NameLabel | IdLabel