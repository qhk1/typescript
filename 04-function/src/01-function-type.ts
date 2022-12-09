type GreetFunction = (a: string) => void

function greeter(fn: GreetFunction) {
    fn('hello world')
};
function printConsole(s: string) {
    console.log(s);
}

greeter(printConsole)