// comaparison with equals operator == / ===
// normal equality ==
let var1 = 5 // Number variable
let var2 = "5" // String variable
console.log(var1 == var2) // logs true
// why does this happen?
// hypotheis: values of a variables containing a string and a variable containing a number
// fist go through a conversion and as a result are compared in their later state
// the == (not strict equals) allows this conversion to happen or rather does not enforce it to not 
// happen and as a result the values are compared in a state that is different from the 
// intended state of the content of the varaible.

console.log(var1)
console.log(var2)