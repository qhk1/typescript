function prientCord(pt: {x: number, y: number}) {
    console.log('x:' + pt.x, 'y: ' + pt.y);
    
}
// prientCord({
//     x: 3,
//     y: 10
// })

function prientName(obj: {first: string, last?: string}) {
    console.log(obj.last?.toUpperCase());
    
    
}
prientName({
    first: 'xiaoming',
    last: ''
})