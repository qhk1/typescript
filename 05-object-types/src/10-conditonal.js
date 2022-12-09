"use strict";
//条件类型
function createLabel(idOrName) {
    throw '';
}
let a1 = createLabel('typescript'); //type a1 = NameLabel
let a2 = createLabel(200); // type a2 = IdLabel
let a3 = createLabel(Math.random() > 0.5 ? 'hello' : 100); //type a3 = NameLabel | IdLabel
