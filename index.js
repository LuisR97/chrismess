//Luis Raygadas

console.log("It works!")

//Top heading of the webpage
//Create button to change the text of the top heading
const button = document.querySelector('button')
function updateTopHeading()
{
    const header = document.querySelector('.chris')
    header.textContent = 'So today we will be discussing more people named Chris'
}

//Updates second heading of the webpage
//create button to change the text of the second heading
const button2 = document.querySelector('#button2')
function updateSecondHeading()
{
    const header2 = document.querySelector('#m1')
    header2.textContent = 'WE WANT CHRIS'
}

button.addEventListener('click', updateTopHeading)
button2.addEventListener('click', updateSecondHeading)

//Create a text box for user input
//Change the text of the first heading to whatever the user typed in the text box
//took some elements from Dave's lecture code
//const button3 = document.querySelector("#scanIn")

const chrisNameList = document.querySelector('#chrisList')
function inputField(event)
{
event.preventDefault()

const field = event.target

const chrisInputName = field.chrisName.value //getting value of input
const itemName = document.createElement('li') //creating a list 
const movieInputName = field.movieName.value
const itemMovie = document.createElement('li')

itemMovie.textContent = chrisInputName + ', ' + movieInputName //assigning values to the list 

const nameList = document.querySelector('#names')
nameList.appendChild(itemMovie)
field.reset()
}
chrisNameList.addEventListener('submit', inputField)

