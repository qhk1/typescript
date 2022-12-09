//索引访问类型

// type Person1 = {
//     age: number,
//     name: string,
//     alive: boolean
// }

// type Age = Person1['age'];
// let age: Age = 90

interface Person1 {
    name: string,
    age: number,
    alive: boolean
}

type I1 = Person1['age' | 'name']; //type I1 = number | string;
const i11: I1 = 100
const i12: I1 = '100'

type I2 = Person1[keyof Person1]; //type I2 = string | number | boolean
const i21: I2 = true

type AliveOrname = 'alive' | 'name'; //type I3 = boolean | string
type I3 = Person1[AliveOrname]
const i31: I3 = '1'

// type I4 = Person1['alve']


const MyArray = [
    {name: '1', age: 11},
    {name: '2', age: 22},
    {name: '3', age: 33},
]

type Person2 = typeof MyArray[number]; //type Person2 = {name: string, age: number}
const p: Person2 = {
    name: '4',
    age: 44,
}

type Age = typeof MyArray[number]['age']; //type Age = number
const age: Age = 11

type Age2 = Person2['age']
const age2: Age2 = 11

// const key = 'age'
type key = 'age'
type Age3 = Person2[key]
