let display = document.getElementsByClassName("display").item(0)
let numbers = document.getElementsByClassName("number-pad-button")

for (let i = 0; i < numbers.length; i++) {
  let element = numbers.item(i)
  
  element.addEventListener("click", (e) => {
    //log event
    let digit = i + 1
    console.log(digit + " pressed")
    display.innerHTML = display.innerHTML + digit
  })
}