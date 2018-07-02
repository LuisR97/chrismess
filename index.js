console.log("It works!")


//Create a text box for user input
//Change the text of the first heading to whatever the user typed in the text box
//took some elements from Dave's lecture code
//const button3 = document.querySelector("#scanIn")

const recomendationsList = document.querySelector('#recRoster')

const renderProperty = function(name, value)
{
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

const handleSubmit = function(ev)
{
ev.preventDefault()
const f = ev.target

const restaurantNameSpan = renderProperty('name', f.restaurantName.value)
const restaurantRatingSpan = renderProperty('name', f.rating.value)

const item = document.createElement('li')
item.classList.add('recomendation')
item.appendChild(restaurantNameSpan)
item.appendChild(restaurantRatingSpan)

const recomendationsList = document.querySelector('#recomendations')
recomendationsList.appendChild(item)
f.reset()
}

recomendationsList.addEventListener('submit', handleSubmit)











/*
const restaurantName = f.restaurantName.value //getting value of input
const restaurantNameSpan = document.createElement('span')
restaurantNameSpan.classList.add('name')
restaurantNameSpan.textContent = restaurantName

const restaurantRating = f.rating.value
const restaurantRatingSpan = document.createElement('span')
restaurantRatingSpan.classList.add('rating')
restaurantRatingSpan.textContent = restaurantRating
*/


/*
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
button2.addEventListener('click', updateSecondHeading) */