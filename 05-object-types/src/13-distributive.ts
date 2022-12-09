//分布式条件类型

type ToArray<Type> = Type extends any ? Type[] : never
 //type StrArrOrNumArr = string[] | number
type StrArrOrNumArr = ToArray<string | number>
let saon: StrArrOrNumArr = ['1', '2']

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
// type StrArrOrNumArr2 = (string | number)[]
type StrArrOrNumArr2 = ToArrayNonDist<string| number>
let saon2: StrArrOrNumArr2 = [1, '2', 3]
