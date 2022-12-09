//类型断言
const myCanvas = document.getElementById('main-canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main-canvas')

const x = ('hello' as unknown) as number