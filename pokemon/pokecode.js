const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const fetchButton = document.querySelector('#fetchSelectedPokemon')
const newButton = document.querySelector('#newPokemon')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')
const submitButton = document.querySelector('#submitButton')

//let inputValue

//closeButton.addEventListener('click', () => {
//    dialog.classList.toggle("is-active")
//})
//
//modalBackground.addEventListener('click', () => {
//    dialog.classList.toggle("is-active")
//})
//
loadButton.addEventListener('click', () => {
    loadPage()
})

class Pokemon {
    constructor (name, height, weight, abilities, moves) {
        this.id = 900
        this.name = name,
        this.height = height
        this.weight = weight
        this.abilities = abilities
        this.moves = moves
    }
}

newButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name of your new Pokemon?')
    let pokeHeight = prompt('Height?')
    let pokeWeight = prompt('Weight?')
    let newPokemon = new Pokemon(
        pokeName,
        pokeHeight,
        pokeWeight,
        ['eat', 'sleep'],
        ['study', 'game']
    )
    console.log(newPokemon)
    populatePokeCard(newPokemon)
})

fetchButton.addEventListener('click', () => {
    let pokeNameOrId = prompt("Enter Pokemon ID or Name:").toLowerCase()
    console.log(pokeNameOrId)
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`).then(
        (data) => {
            populatePokeCard(data)
        }
    )
})

//submitButton.addEventListener('click', () => {
//    console.log(inputValue)
//    let inputField = document.querySelector('.input')
//    inputValue = inputField.value
//    //console.log(inputValue)
//} )

async function getAPIData(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } 
    
    catch (error){
        console.log(error)
    }
}

function loadPage(){
    const response = getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=150`).then(
        async(data)=> {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => populatePokeCard(pokeData)
                )
                
            }
        }
    )
    //console.log(response)
}

function populatePokeCard(singlePokemon){
    //console.log(singlePokemon)
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}


function populateCardFront (pokemon) {
    console.log(pokemon)
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card_face card_face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = getImageFileName(pokemon)
    
    pokeFront.appendChild(frontLabel)
    pokeFront.appendChild(frontImage)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card_face card_face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `Moves: ${pokemon.moves.length}`
    pokeBack.appendChild(backLabel)
    return pokeBack
}

function getImageFileName(pokemon) {
    let pokeId
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeId= `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
    if (pokemon.id === 900){
        return `images/pokeball.png`
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}