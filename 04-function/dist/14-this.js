"use strict";
const db = {
    filtersUser: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
const admins = db.filtersUser(function () {
    return this.admin;
});
// const admins = db.filtersUser((this: User) => {
//     return this.admin
// })
console.log(admins);
