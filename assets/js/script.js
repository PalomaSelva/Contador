var currentNumberWrapper = window.document.getElementById('currentNumber')
var currentNumber=0

function decrement() {
    currentNumber= currentNumber-1
    currentNumberWrapper.innerHTML=currentNumber
}
function increment() {
    currentNumber= currentNumber+1
    currentNumberWrapper.innerHTML=currentNumber
}

