"use strict";
//基于类型守卫的this
// class FileSystemObject {
//     isFile(): this is FileRep {
//         return this instanceof FileRep
//     }
//     isDirectory(): this is Directory {
//         return this instanceof Directory
//     }
//     isNetWorked(): this is NetWorded & this {
//         return this.netWorked
//     }
//     constructor(public path: string, private networked: boolean) {
//     }
// }
// class FileRep extends FileSystemObject {
//     constructor(path: string, public content: string) {
//         super(path, false)
//     }
// }
// class Directory extends FileSystemObject {
//     children: FileSystemObject[]
//     constructor() {
//         super('', false)
//         this.children = []
//     }
// }
// interface NetWorded {
//     host: string
// }
// const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo')
// if(fso.isFile()) {
//     //const fso: FileRep
//     fso.content
// } else if(fso.isDirectory()) {
//     //const fso: Directory
//     fso.children
// } else if(fso.isNetWorked()) {
//     //const fso: NetWorded & FileSystemObject
//     fso.host
// }
class Box {
    hasValue() {
        return this.value !== undefined;
    }
}
const box3 = new Box();
box3.value = 'gello';
if (box3.hasValue()) {
    console.log(box3.value);
}
