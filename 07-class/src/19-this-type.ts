//this类型


// class Box2 {
//     content: string = ''

//     set(value: string) {
//         this.content = value
//         return this
//     }
// }

// class ClearBox extends Box2 {
//     clear() {
//         this.content = ''
//     }
// }

// const a = new ClearBox()
// const b4 = a.set('hello')
// console.log(b4);


class Box2 {
    content: string = ''

    sameAs(other: this) {
        return other.content === this.content
    }
}

class DerivedBox extends Box2 {
    otherContent: string = 'hello'
}

const base2 = new Box2()
const derived = new DerivedBox()


// derived.sameAs(base2)