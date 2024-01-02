const pokemonName = document.querySelector ('.pokemon_name')
const pokemonNumber = document.querySelector ('.pokemon_number')
const pokemonImage = document.querySelector ('.pokemon_image')
const form = document.querySelector ('.form')
const input = document.querySelector ('.input_seach')
const buttonPrev = document.querySelector ('.btn-prev')
const buttonNext = document.querySelector ('.btn-next')

let searchPokemon = 1 

const fetchpokemon = async (pokemon) => {

   const APIreponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
 
   if (APIreponse.status === 200){
 
    const data = await APIreponse.json()
    return data
   }

}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Loading..."
    pokemonNumber.innerHTML = ""

    const data = await fetchpokemon (pokemon)

    if(data){

    pokemonName.innerHTML = data.name 
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']
    ['animated']['front_default']
    searchPokemon = data.id
  
    } else {
        pokemonImage.style.display = "none"
        pokemonName.innerHTML = "Not found :c"
        pokemonNumber.innerHTML = ""

    }
}

form.addEventListener('submit',(event) =>{
    
    event.preventDefault()

    renderPokemon(input.value.toLowerCase())
    input.value = ""
})

renderPokemon(searchPokemon)

buttonPrev.addEventListener('click',() => {
    if (searchPokemon > 1){
    
    searchPokemon -= 1
    renderPokemon(searchPokemon)      
    }
})

buttonNext.addEventListener('click',() => {
    searchPokemon += 1
    renderPokemon(searchPokemon)     
})


