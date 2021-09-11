let swiper = document.getElementById('swiper')


const fetchPokemons = async () => {
    for (let i = 1; i <= 800; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    pintarCard(id, pokemon)
}

fetchPokemons()

const pintarCard = (i,pokemon) => {
    let swiper = document.getElementById('swiper')
    let swiperSlide = document.createElement('div')
    swiperSlide.classList.add('swiper-slide')
  
    //TitleName
    let titleName = document.createElement('h1')
    titleName.classList.add('card-body-title')
    const pokemonName = pokemon.name
    titleName.innerText = pokemonName
    
    //Imagen
    let imageCard = document.createElement('img')
    imageCard.classList.add('carousel-item__img')
    imageCard.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
    
    //Experiencia
    let exp = document.createElement('p')
    exp.classList.add('card-body-parraf')
    const pokemonExp = pokemon.base_experience
    exp.innerHTML = `Experiencia: ${pokemonExp}`
    
    //Hp
    let hp = document.createElement('p')
    hp.classList.add('card-body-parraf')
    const pokemonHp = pokemon.stats[0].base_stat
    hp.innerHTML = `Hp: ${pokemonHp}`
    
    //Ataque
    let attack = document.createElement('p')
    attack.classList.add('card-body-parraf')
    const pokemonAttack = pokemon.stats[1].base_stat
    attack.innerHTML = `Attack: ${pokemonAttack}`
    
    //Defenda
    let defense = document.createElement('p')
    defense.classList.add('card-body-parraf')
    const pokemonDefense = pokemon.stats[2].base_stat
    defense.innerHTML = `Defense: ${pokemonDefense}`

    //Special
    let special = document.createElement('p')
    special.classList.add('card-body-parraf')
    const pokemonSpecial = pokemon.stats[3].base_stat
    special.innerHTML = `Special: ${pokemonSpecial}`

    swiper.appendChild(swiperSlide)
    swiperSlide.appendChild(titleName)
    swiperSlide.appendChild(imageCard)
    swiperSlide.appendChild(exp)
    swiperSlide.appendChild(hp)
    swiperSlide.appendChild(attack)
    swiperSlide.appendChild(defense)
    swiperSlide.appendChild(special)

    swiperSlide.addEventListener('click', function(){
        titleName.classList.toggle('hide')
        imageCard.classList.toggle('hide')
        
        exp.classList.toggle('show')
        hp.classList.toggle('show')
        attack.classList.toggle('show')
        defense.classList.toggle('show')
        special.classList.toggle('show')

    })

}