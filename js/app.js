const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) 

document.addEventListener('DOMContentLoaded', ( ) => 
    fetchData(getRandomInt(1,151))
)


const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            id: data.id,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            name: data.name,
            hp: data.stats[0].base_stat,
            exp: data.base_experience,
            attack: data.stats[1].base_stat ,
            defense: data.stats[2].base_stat ,
            special: data.stats[3].base_stat 
        }

       
        pintarCard(pokemon)

    } catch (error) {
        console.log(error)
    }
}


const pintarCard = (pokemon) => {

    const toUppercase = (namePokemon) => {
        namePokemon = namePokemon[0].toUpperCase() + namePokemon.slice(1);
        return namePokemon  
    }

    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = ` ${toUppercase(pokemon.name)} <span>${pokemon.hp} Hp </span> `
    clone.querySelector('.card-body-text').innerHTML = ` ${pokemon.exp} <span> Experiencia </span>`
    clone.querySelectorAll('.card-footer-social h3')[0].innerHTML =  `${pokemon.attack}`
    clone.querySelectorAll('.card-footer-social h3')[1].innerHTML =  `${pokemon.special}`
    clone.querySelectorAll('.card-footer-social h3')[2].innerHTML =  `${pokemon.defense}`


    fragment.appendChild(clone)
    flex.appendChild(fragment)
}