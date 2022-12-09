"use strict";
//条件类型约束
// type MessageOf<T> = T['message']
// type MessageOf<T extends {message: unknown}> = T['message'];
// type MessageOf<T> = T extends {message: unknown} ? T['message'] : never;
