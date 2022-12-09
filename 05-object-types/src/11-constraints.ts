//条件类型约束
// type MessageOf<T> = T['message']
// type MessageOf<T extends {message: unknown}> = T['message'];
// type MessageOf<T> = T extends {message: unknown} ? T['message'] : never;

// interface Email {
//     message: string
// }
// interface Dog {
//     bark() :void
// }

// type EmailMessageContents = MessageOf<Email> //type EmailMessageContents = string
// const emailMessageContents: EmailMessageContents = '111'

// type DogMessageContents = MessageOf<Dog>; //type  DogMessageContents = never
// const dmc: DogMessageContents = '111' as never



type Flatten<T> = T extends any[] ? T[number] : T
type Str = Flatten<string[]>; //type str = string
type Num = Flatten<number>; //type Num = number

