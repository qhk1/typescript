"use strict";
function greeter(fn) {
    fn('hello world');
}
;
function printConsole(s) {
    console.log(s);
}
greeter(printConsole);
