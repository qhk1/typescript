interface User {
    admin: boolean
}
interface DB {
    filtersUser(filter: (this: User) => boolean): User[]
}

const db: DB = {
    filtersUser: (filter: (this: User) => boolean) => {
        let user1: User = {
            admin: true
        }
        let user2: User = {
            admin: false
        }
        return [user1, user2];
    }
}
const admins = db.filtersUser(function(this: User) {
    return this.admin;
})
// const admins = db.filtersUser((this: User) => {
//     return this.admin
// })

console.log(admins);
