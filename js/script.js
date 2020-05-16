window.addEventListener('load', start)

function start() {
    var myText = document.querySelector('#myText')
    myText.addEventListener('keyup', countCar)
}

function countCar(event) {
    console.log(event)
    var count = event.target.value
    var span = document.querySelector('#numberCar')
    let carWord = ' caracteres'
    span.textContent = count.length
}

function resetCount() {
    document.querySelector('#numberCar')
    numberCar.textContent = 0
}
