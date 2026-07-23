const readline = require('node:readline');

let _v1;
let _promise_ran = false
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const _promise = new Promise((resolve, reject) => {
  if (_v1 == 5) {
    resolve("The variable has the expected value 5.")
  } else {
    reject("The variable has not attained the required value 5.")
  }
})

_promise.then((result) => {
  console.log(result)
})
  .catch((result) => {
    console.log(result)
  })
  .finally(() => {
    console.log("All states managed.")
  })

let expectVariable = function () {
  rl.question("user selected number: ", n => {
    _v1 = n
    console.log("promise meet attempted with: " + _v1)
    if (!_promise_ran) {
      expectVariable()
    }
  })
}
expectVariable()
