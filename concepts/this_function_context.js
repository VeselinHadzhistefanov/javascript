let func_1 = function () {
  return this;
}

let func_2 = {
  func_3: function () {
    func_4 = () => this
    return func_4
  }
}
console.log(func_2.func_3())