import { starships } from '../data/starships.js'

console.log(starships.length)

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav(starships) {
    starships.forEach(starship => {
        let listItem = document.createElement('li')
        listItem.textContent = starship.name // starship.MGLT

             
        navList.appendChild(listItem)
    })
}

function populateShipView(shipData) {
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assests/img/starships/9.jpg`
    shipView.appendChild(shipImage)
}

populateNav(starships)