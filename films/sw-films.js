import {films} from '../data/films.js'
import { getLastNumber } from '../utils/index.js'

let filmList = document.querySelector('#filmList')

for (let i = 0; i < films.length; i++) {
    
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let posterFig = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    
    figCaption.textContent = foundFilm.title
    posterFig.appendChild(figImg)
    posterFig.appendChild(figCaption)
    
    filmList.appendChild(posterFig)
}

//function addStarField(element, numStars) {
//    element.style.setProperty('background-color', '#000')
//    for (let i = 0; i < numStars; i++) {
//        let star = document.createElement('div')
//        star.style.setProperty('position', 'absolute')
//        star.style.setProperty('width', '2px')
//        star.style.setProperty('height', '2px')
//        star.style.setProperty('background-color', 'white')
//        let xy = getRandomPosition()
//        star.style.left = `${xy[0]}px` 
//        star.style.top = `${ xy[1]}px`
//        element.appendChild(star)
//    }
//}
//
//function getRandomPosition() {
//    let y = document.body.scrollHeight
//    let x = document.body.scrollWidth
//    let randomY = Math.floor(Math.random() * y)
//    let randomX = Math.floor(Math.random() * x)
//    return [randomX, randomY]
//}
//
//addStarField(document.querySelector('body'), 1000)
