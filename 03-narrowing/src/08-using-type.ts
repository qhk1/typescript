//类型谓词
type fish = {
    name: string,
    swim: () => void
}
type bird = {
    name: string,
    fly: () => void
}

function isFish(pet: fish | bird): pet is fish {
    return (pet as fish).swim !== undefined
}

function getSmallPet(): fish | bird {
    let fish: fish = {
        name: '111',
        swim: () => {

        }
    }
    let bird: bird = {
        name: '222',
        fly: () => {

        }
    }
    return true ? bird : fish
}

let pet = getSmallPet();
if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

const zoo: (fish | bird)[] = [getSmallPet(),getSmallPet(),getSmallPet()]
const underWater: fish[] = zoo.filter(isFish)


