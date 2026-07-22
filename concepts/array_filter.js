let a = [1, 2, 3, 4]
let b = a.filter((a, b, arr) => {
  return b >= arr.length / 2
})
console.log(b)

let halveArray = function (arr) {
  let r = arr.filter((a, b, nums) => b >= nums.length / 2)
  return r
}

let WholeNumbers = function* (n) {
  let i = n
  while (i >= 0) {
    yield n - i;
    i--;
  }
  yield null;
}

let DoubleCounter = function* (n) {
  let a = 0
  let b = n - 1
  for (i = 0; i < n; i++) {
    a++
    b--
    yield [this.a, this.b]
  }
}

let c = []
let g = WholeNumbers(5)
while ((n = g.next().value) != null) {
  c.push(n)
}
console.log(c)
console.log(g)

let e = DoubleCounter(7)
while(!e.next().done){
  console.log(e.next())
}

