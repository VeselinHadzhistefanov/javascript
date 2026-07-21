// principle: === can be more useful than ==
// test plan: list all use cases for == and === and compare their application coverage

let compareVariables = function (a, b) {
  let aPrototype = ((Object)(a)).prototype
  console.log(aPrototype)

}

let logVariable = function (a) {
  let o = new Object(a)
  let _o = Object.getOwnPropertyNames(o)
  console.log(_o)
}

let logComparison = function (a, b) {
  console.log()
}

let nonStrictUseCases = []
nonStrictUseCases[0] = function () {
  console.log()
}

let getAllPropertyNames = function (o, depth = 0) {
  let l = Object.getOwnPropertyNames(o)

  for (i of l) {
    let _o = o[i]
    console.log(" ".repeat(depth) + i + ": " + _o)
    let _l = Object.getOwnPropertyNames(_o)
    if (_l.length > 0 && _o !== o) {
      getAllPropertyNames(_o, depth + 4)
    }
  }
}

let o1 = {
  a: "A",
  b: "5",
  c: { a: 1, b: 2, c: 3 },
  d: { a: "A", b: { a: "A", b: "B" } }
}

getAllPropertyNames(o1)

// cases for ==
// cases for ===