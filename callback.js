//example callback function behavior

//synchorsous
this.value = 1
this.states = 0;

function processValue(callback, value) {
  return callback(value)
}

function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}

function incrementObjectValue(obj) {
  if (obj.value == null) {
    console.log("value reference of object is " + obj.value)
    return;
  }
  obj.value += 1;
}

function incrementObjectParameter(obj, name) {
  if (obj[name] == null) {
    console.log(name + " reference of object is " + obj[name])
    return
  }
  obj[name] += 1;
}


//function test
console.log("increment " + increment(1))

//pass function as argument (callback)
console.log("process + increment " + processValue(increment, 5));

//pass global variable as argument
console.log("process this.value " + processValue(increment, this.value))
console.log("log this.value " + this.value)

//increment value reference in object
incrementObjectValue(this)
console.log(this.value)

//increment parameter by name in object
incrementObjectParameter(this, "states")
console.log(this.states)

//increment null parameter in object
incrementObjectParameter(this, "state")
