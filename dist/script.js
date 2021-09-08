const pokemonsIds = [1,2,3,4,5,6,7,8,9,10]

const newArray = pokemonsIds.map(async id =>{
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const parsedPokemon = await pokemon.json()
    pintarCard(id, parsedPokemon)
})


const pintarCard = (i,pokemon) => {
    let swiper = document.getElementById('swiper')
    let swiperSlide = document.createElement('div')
    swiperSlide.classList.add('swiper-slide')
    swiper.appendChild(swiperSlide)
    //Crear elemento titulo y asignarle una variable
    let titleName = document.createElement('h1')
    //Agregarle una clase al titulo
    titleName.classList.add('card-body-title')
    //Insertar los nombres de los pokemones
    titleName.innerHTML = `${pokemon.name}`
    //Crear elemento imagen y asignarle una variable
    let imageCard = document.createElement('img')
    //Agregarle una clase a la imagen
    imageCard.classList.add('carousel-item__img')
    //La imagen es hija de li
    swiperSlide.appendChild(imageCard)
    //Insertar las imagenes de los pokemones
    imageCard.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
    //Ordenar elementos. Titulo está antes que la imagen, y los dos estan dentro de li
    swiperSlide.insertBefore( titleName,imageCard)

}

// const pokemon = {
//     id: data.id,
//     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
//     name: data.name,
//     hp: data.stats[0].base_stat,
//     exp: data.base_experience,
//     attack: data.stats[1].base_stat,
//     defense: data.stats[2].base_stat,
//     special: data.stats[3].base_stat
// }

