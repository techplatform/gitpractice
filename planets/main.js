import { planets } from '../data/planets.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

console.log(planets.length)

const nav = document.querySelector('nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipView')

function populateNav(planets) {
    planets.forEach(planets => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', () => populateShipView(planets))
        let listItem = document.createElement('li')
        listItem.textContent = planets.name // starship.MGLT

             
        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
    })
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/planets/${shipNum}.jpg`
    shipImage.addEventListener('error', (err) => {
        //counsole.log("Oops! Got an image loading error!")
        shipImage.hidden = true
        
    })
    shipView.appendChild(shipImage)
}

function addStarField(element, numStars) {
    element.style.setProperty('background-color', '#000')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px` 
        star.style.top = `${ xy[1]}px`
        element.appendChild(star)
    }
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

populateNav(planets) 

addStarField(document.querySelector('body'), 1000)


