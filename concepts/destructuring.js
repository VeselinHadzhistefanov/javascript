let a = { q: 1, w: 2 }
console.log(a)
a = { a: 4, b: 5 }
console.log(a)

let b = { a: 1, b: 2 }
let c = { d: 3, e: 4 }
let temp = b
{temp} = c
console.log(temp)

