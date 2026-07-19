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
}

class OperationNode {
  constructor(entr, op) {
    this.entr = (entr != null) ? entr : null;
    this.op = (op != null) ? op : op;
  }
  complete = function (entr, op) {
    switch (op) {
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

// event listener for numeric buttons
const numericButtons = document.getElementsByClassName("numeric-button")
for (let i = 0; i < numericButtons.length; i++) {
  let btn = numericButtons.item(i)
  btn.addEventListener("click", handleNumericEntry)
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

  console.log(collapseNumericStack(entryStack))
}

function collapseNumericStack(stack) {
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
