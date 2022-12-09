"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: '111',
        swim: () => {
        }
    };
    let bird = {
        name: '222',
        fly: () => {
        }
    };
    return true ? bird : fish;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isFish);
