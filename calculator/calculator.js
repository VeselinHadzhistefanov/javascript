const EntryMode = Object.freeze({
  WHOLE: Symbol(0),
  FRACTIONAL: Symbol(1),
  OPERATION: Symbol(2)
})

class EntryNode {
  constructor(sy, next) {
    this.sy = (sy != null) ? sy : null;
    this.next = (next != null) ? next : null;
  }
  collapse() {
    let stack = this
    let num = 0;
    let ex = 1;
    while (stack != null) {
      if (stack.sy == ".") {
        num /= ex
        ex = 1;
      } else {
        num += parseInt(stack.sy) * ex
        ex *= 10;
      }
      stack = stack.next
    }
    return num
  }
}

class OperationNode {
  constructor(entr, op) {
    this.entr = (entr != null) ? entr : null;
    this.op = (op != null) ? op : op;
  }
  complete(entr, op) {
    switch (this.op) {
      case "+":
        this.entr += entr;
        break;
      case "-":
        this.entr -= entr;
        break;
      case "*":
        this.entr *= entr;
        break;
      case "/":
        this.entr /= entr;
        break;
    }
    this.op = (op != null) ? op : null;
    return this.entr;
  }
}

let display = document.getElementById("display")
let entryMode = EntryMode.WHOLE
let entryStack = null
let operation = null

// numeric buttons event listeners
const numericButtons = document.getElementsByClassName("numeric-button")
for (let i = 0; i < numericButtons.length; i++) {
  let btn = numericButtons.item(i)
  btn.addEventListener("click", handleNumericEntry)
}
// operation buttons event listeners
const operationButtons = document.getElementsByClassName("operation-button")
for (let i = 0; i < operationButtons.length; i++) {
  let btn = operationButtons.item(i)
  btn.addEventListener("click", handleOperationEntry)
}

function handleNumericEntry(e) {
  let di = e.srcElement.id

  if (parseInt(di) != null) {
    if (entryMode == EntryMode.OPERATION) {
      entryMode = EntryMode.WHOLE
      entryStack = null
    }
    let next = new EntryNode(di, entryStack)
    entryStack = next
  }
  else if (di == ".") {
    if (entryMode == EntryMode.WHOLE) {
      let next = new EntryNode(di, entryStack)
      entryStack = next
      entryMode = EntryMode.FRACTIONAL
    }
  }
  console.log(entryStack.collapse())
}

function handleOperationEntry(e) {
  let op = e.srcElement.innerHTML
  if (entryMode == EntryMode.WHOLE || entryMode == EntryMode.FRACTIONAL) {
    entryMode = EntryMode.OPERATION
    if (entryStack == null) {
      enrtyStack = new EntryNode(0, null);
    }
    if (operation == null) {
      operation = new OperationNode(entryStack.collapse(), op)
    }
    else {
      operation.complete(entryStack.collapse(), op)
      console.log(operation.entr)
    }
  }
  else {
    operation.op = op
  }
}


