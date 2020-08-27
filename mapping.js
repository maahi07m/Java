//Now output is returned as object
const numbers = [1,2,3,4];
const items = numbers.map((number) => {
    return {value:number}
    });
console.log(items)

//Now it is returned as undefined
const numbers = [1,2,3,4];
const items = numbers.map((number) => { value:number} );
console.log(items)
