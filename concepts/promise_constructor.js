const e = function (resolve, reject) {
  let condition = 0
  setTimeout(() => {
    condition = (Math.random()) * 2.0
  }, 2000)
  console.log(condition)
  if (condition > 1) {
    resolve("condition")
  } else {
    reject("failed to optain capacity")
  }
}

const f = async function () {
  try {
    console.log("promise with executor function created")
    const af = function () {
      let g = new Promise(e)
      g.then(() => { console.log("then acceptance function ran") })
        .catch((te) => { console.log("function threw an error") })
      return g;
    }
    const result = await af();
    console.log(result)
  } catch (et) {
    console.log("function threw an error") 
  }
}
f()


