console.log("It works!")


//Create a text box for user input
//Change the text of the first heading to whatever the user typed in the text box
//took some elements from Dave's lecture code
//const button3 = document.querySelector("#scanIn")

const recomendationsList = document.querySelector('#recRoster')

function handleSubmit(ev)
{
ev.preventDefault()
const f = ev.target

const restaurantName = f.restaurantName.value //getting value of input
const restaurantNameSpan = document.createElement('span')
restaurantNameSpan.textContent = restaurantName

const restaurantRating = f.rating.value
const restaurantRatingSpan = document.createElement('span')
restaurantRatingSpan.textContent = restaurantRating

 
const item = document.createElement('li')
item.appendChild(restaurantNameSpan)
item.appendChild(restaurantRatingSpan)

const recomendationsList = document.querySelector('#recomendations')
recomendationsList.appendChild(item)
f.reset()
}

recomendationsList.addEventListener('submit', handleSubmit)













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



/*class App 
{
    constructor()
    {
        this.list = document.querySelector('#recomendations')
        
        const form = document.querySelector('form#recRoster')
        form.addEventListener('submit', (ev) =>
        {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }

    save()
    {
        localStorage.setItem('recomendations', JSON.stringify(this.recomendations))
    }

    renderProperty(name, value)
    {
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span 
    }
    
    renderProperties(recomendation, item)
    {
        const div = document.createElement('div')
        div.classList.add('info')

        //get the list of properties
        const properties = Object.keys(recomendation)

        //loop over the properties
        properties.forEach((propertyName) => 
        {
        //build a span, and append it to the div
        const span = this.renderProperty(propertyName, recomendation[propertyName])
        div.appendChild(span)
        })

        return div
    }

    renderItem(recomendation)
    {
        const item = document.createElement('li')
        item.classList.add('recomendation')

        //add all properties
        const properties = his.renderProperties(recomendation, item)
        item.appendChild(properties)

        //add action buttons
        const actions = this.renderActionButtons(recomendation, item)
        item.appendChild(actions)
        
        return item
    }

    addRecomendation(recomendation)
    {
        this.recomendation.push(recomendation)
        const item = this.renderItem(recomendation)

        if(recomendation.favorite)
        {
            item.classList.add('fav')
        }

        this.list.appendChild(item)

    }

    handleSubmit(ev)
    {
        const f = ev.target

        const recomendation =
        {
            name: f.restaurant.value,
            rating: f.rating.value,
            favorite: false,
        }

        this.addRecomendation(recomendation)
        this.save()
        
        f.reset()
        f.restaurant.focus()
    }

}
  
const app = new App() */
