const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
})

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
    const response = getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
        (data)=> {
            for (const singlePokemon of data.results) {
                console.log(singlePokemon)
                populatePokeCard(singlePokemon)
            }
        }
    )
    //console.log(response)
}

function populatePokeCard(singlePokemon){
    console.log(singlePokemon)
}
