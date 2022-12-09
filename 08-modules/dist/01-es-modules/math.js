"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.RandomNumber = exports.phi = exports.squreTwo = exports.pi = void 0;
exports.pi = 3.14;
exports.squreTwo = 1.41;
exports.phi = 1.61;
class RandomNumber {
}
exports.RandomNumber = RandomNumber;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
