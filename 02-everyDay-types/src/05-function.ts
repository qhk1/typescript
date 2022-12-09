function greet(name: string) {
    console.log(`hello ${name.toUpperCase()} !!`);
    
}
greet('xiaoming')

function getNumber(): number {
    return 26
}

const names = ['xiaoming','hhh', 'ddd']
names.forEach((item)=> {
    console.log(item.toUpperCase());
    
})