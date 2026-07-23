let g = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise api resolved")
    }, 2000)
  })
}

let f = async function(){
  console.log("async function ran")
  let result = await g()
  console.log(result)
}

f()