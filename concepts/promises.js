const readline = require('node:readline');

const _promise = new Promise((resolve, reject) => {
  let v = 0;
  if (v == 5) {
    resolve("The variable has the expected value 5.")
  } else {
    reject("The variable has not attained the required value 5.")
  }
})

_promise.then(() => {
  console.log(result)
})
  .catch(() => {
    console.log(result)
  })
  .finally(() => {
    console.log("All states managed.")
  })

let _v1 = 0;
let _promise_ran = false
let rl = readline.createInterface({
  input: process.stdin,
  output: stdout
});
while (!_promise_ran) {
  rl.question("user selected number: ", n => { 
    _v1 = n 
    console.log("promise meet attempted with: " + _v1)
    rl.close();
  })
  //rl.close();
}
