class App 
{
    constructor()
    {
        this.recomendationsList = document.querySelector('#recomendations')
        this.recomendations = []

        const recomendationsList = document.querySelector('#recRoster')
        recomendationsList.addEventListener('submit', (ev) =>
        {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }
    renderProperty(name, value)
    {
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }

    renderItem(recomendation)
    {
        const item = document.createElement('li')
        item.classList.add('recomendation')

        //get the list of properties
        const properties = Object.keys(recomendation)
        
        //loop over each propertiy
        properties.forEach((propertyName) =>
        {
            //build a span
            const span = this.renderProperty(propertyName, recomendation[propertyName])
            item.appendChild(span)
        })  

        //add delete button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete'
        deleteButton.addEventListener('click', (_ev) => this.removeRecomendation(recomendation, item))
        item.appendChild(deleteButton)

        //add a favorite button
        const favButton = document.createElement('button')
        favButton.textContent = 'favorite'
        favButton.addEventListener('click', (_ev) => this.toggleFavorite(recomendation, item))
        item.appendChild(favButton)
        return item
    }

    toggleFavorite(recomendation, item)
    {
        recomendation.favorite = !recomendation.favorite
    }

    removeRecomendation(recomendation, item)
    {
        //remove from the UI
        this.recomendationsList.removeChild(item)

        //remove from the array
        const i = this.recomendations.indexOf(recomendation)
        this.recomendations.splice(i, 1)
    }

    handleSubmit(ev)
    {
    
    const f = ev.target

    const recomendation =
    {
        name: f.restaurantName.value,
        rating: f.rating.value, 
        favorite: false,
    } 

    this.recomendations.push(recomendation)
    
    this.recomendations.push(recomendation)

    const item = this.renderItem(recomendation)

    this.recomendationsList.appendChild(item)
    
    f.reset()
    f.restaurantName.focus()
    }

}

const app = new App()
console.log("It works!")










/*const restaurantNameSpan = renderProperty('name', f.restaurantName.value)
const restaurantRatingSpan = renderProperty('name', f.rating.value)

const item = document.createElement('li')
item.classList.add('recomendation')
item.appendChild(restaurantNameSpan)
item.appendChild(restaurantRatingSpan) */



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