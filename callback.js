//example callback function behavior

//synchorsous
this.value = 1
function processValue(callback, value) {
  return callback(value)
}

function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}

function incrementValueOfObject(obj) {
  if (obj.value == null) {
    console.log("value reference of object is " + obj.value)
    return;
  }
  obj.value += 1;
}

//function test
console.log("increment " + increment(1))

//pass function as argument (callback)
console.log("process + increment " + processValue(increment, 5));

//pass global variable as argument
console.log("process this.value " + processValue(increment, this.value))
console.log("log this.value " + this.value)

//increment value reference in object
incrementValueOfObject(this)
console.log(this.value)