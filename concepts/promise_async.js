let g = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve function ran")
    }, 2000)
  })
}