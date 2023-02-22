interface Cordinate{
    x: number 
    y: number 
}

function parseCordinateFromObj(payload: Cordinate): Cordinate{
    return {
        ...payload
    }
}

function parseCordinate(payload: Cordinate): Cordinate
function parseCordinate(x: number, y: number): Cordinate
function parseCordinate(payload: string): Cordinate

function parseCordinate(arg1: unknown, arg2?: unknown): Cordinate{
    let cordinate: Cordinate = {
        x: 0,
        y: 0
    }
    if(typeof arg1 === "object"){
        cordinate = {...(arg1 as Cordinate)}
    }else if(typeof arg1 === "string"){
        arg1.split(',').forEach(str=>{
            const [key, value] = str.split(':')
            cordinate[key as 'x' | 'y'] = parseInt(value)
        })
    }else {
        cordinate = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    return cordinate
}

console.log(parseCordinate({x: 10, y: 20}))
console.log(parseCordinate(11,21))
console.log(parseCordinate('x:10;y:23'))