async function func(a: number, b: number): Promise<number> {
    return a + b
}
function g(a:number):number{
    return a
}
async function f(a: number) {
    let c = await func(1, 2)
    console.log(func(1, 2),g(3), c)
}
f(1)