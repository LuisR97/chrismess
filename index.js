//Luis Raygadas

console.log("It works!")

const button = document.querySelector('button')
function changeText()
{
    const header = document.querySelector('.chris')
    header.textContent = 'So today we will be discussing more people named Chris'
}

const button2 = document.querySelector('#button2')
function changeH()
{
    const header2 = document.querySelector('#m1')
    header2.textContent = 'WE WANT CHRIS'
}

button.addEventListener('click', changeText)
button2.addEventListener('click', changeH)

const button3 = document.querySelector("#scanIn")
function inputText()
{
const headerchange = document.querySelector(".chris" )
headerchange.textContent = document.querySelector("#scanOut").value
event.preventDefault()
}
button3.addEventListener('click', inputText)
