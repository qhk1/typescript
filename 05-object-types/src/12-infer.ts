//infer   在条件类型内进行推理
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return  ? Return : never

// type Num1 = GetReturnType<() => number>; //type Num = nubmer
// let num: Num1 = 1111

// type Str1 = GetReturnType<(x: string) => string>; //type str = string
// let str: Str1 = '1111'

// type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; //type Bools = boolean[]
// let bools: Bools = [false, true]

// type Never = GetReturnType<string>; //type Never = never
// let never: Never = '11' as never;

function stringOrNum(x: string): number
function stringOrNum(x: number): string
function stringOrNum(x: string | number): string | number
function stringOrNum(x: string | number): string | number {
    return Math.random() > 0.5 ? '11': 11
}

type T1 = ReturnType<typeof stringOrNum>; //type T1 = string | number
const t1: T1 = '11'