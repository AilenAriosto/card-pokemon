// Sections 
const sectionIniciarPartida = document.getElementById("iniciar-partida")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const sectionMascotaSeleccionada = document.getElementById("mascota-seleccionada")

// Components
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const spanMascotaJugador = document.getElementById("mascota-jugador");


// Buttons
const iniciarPartidaButton = document.getElementById('iniciar-partida-button')


const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
// const sectionReiniciar = document.getElementById("reiniciar");
// sectionReiniciar.style.display = 'none'
// const botonReiniciar = document.getElementById("boton-reiniciar");
// let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
// const spanVidasJugador = document.getElementById("vidas-jugador");
// const spanVidasEnemigo = document.getElementById("vidas-enemigo");
// const sectionMensajes = document.getElementById("resultado");
// const ataquesDelJugador = document.getElementById("ataques-del-jugador");
// const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
// const contenedorAtaques = document.getElementById("contenedorAtaques")
// const sectionVerMapa = document.getElementById("ver-mapa")
// const mapa = document.getElementById("mapa")

let mokepones = []
let opcionDeMokepones   
let inputHipodoge
let inputCapipepo
let inputRatigueya
let ataqueJugador = []
let ataqueEnemigo = []
let ataquesMokepon
let ataquesMokeponEnemigo
let mascotaJugador
let vidasJugador = 3;
let vidasEnemigo = 3;
let botonTierra
let botonFuego
let botonAgua
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo


class Pokedex {

  constructor(nombre, foto, vida){

    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.x = 20
    this.y = 30
    this.ancho = 80
    this.alto = 80
    this.mapaFoto = new Image()
    this.mapaFoto.src = foto
    this.velocidadX = 0
    this.velocidadY = 0

  }

}

let hipodoge = new Pokedex('Hipodoge', './assets/img/dino_blue.svg', '5')

let capipepo = new Pokedex('Capipepo', './assets/img/dino_red.svg', '5')

let ratigueya = new Pokedex('Ratigueya', './assets/img/dino_violet.svg', '5')

hipodoge.ataques.push(
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Tierra', id: 'boton-tierra' }
)

capipepo.ataques.push(
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Tierra', id: 'boton-tierra' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Fuego', id: 'boton-fuego' }
)

ratigueya.ataques.push(
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Fuego', id: 'boton-fuego' },
  { nombre: 'Agua', id: 'boton-agua' },
  { nombre: 'Tierra', id: 'boton-tierra' }
)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego() { 
  sectionIniciarPartida.style.display = "none"
  sectionSeleccionarMascota.style.display = "block"

  // sectionSeleccionarAtaque.style.display = "none";
  // sectionVerMapa.style.display = "none"

  mokepones.forEach((mokepon) => {
    console.log(mokepon.nombre)
    opcionDeMokepones = `
      <input id="${mokepon.nombre}" type="radio" name="mascota">
      <label class="seleccionarMascota__tarjetas__tarjeta" for="${mokepon.nombre}">
        <img src="${mokepon.foto}" alt="${mokepon.nombre}" />
      </label> 
      `
      // <p>${mokepon.nombre}</p>

    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge");
    console.log(inputHipodoge)
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  })


  if (inputHipodoge.checked) {
    sectionMascotaSeleccionada = `
      <h1> Mascota </h1>
    `
  } else if (inputCapipepo.checked) {
    sectionMascotaSeleccionada = `
      <h1> Mascota </h1>
    `
  } else if (inputRatigueya.checked) {
    sectionMascotaSeleccionada = `
      <h1> Mascota </h1>
    `
  } else {
    console.log("error")
  }

  // sectionVerMapa.style.display = "flex"
  // intervalo = setInterval(pintarPersonaje, 50)


  // if (inputHipodoge.checked) {
  //   spanMascotaJugador.innerHTML = inputHipodoge.id
  //   mascotaJugador = inputHipodoge.id
  // } else if (inputCapipepo.checked) {
  //   spanMascotaJugador.innerHTML = inputCapipepo.id
  //   mascotaJugador = inputCapipepo.id
  // } else if (inputRatigueya.checked) {
  //   spanMascotaJugador.innerHTML = inputRatigueya.id
  //   mascotaJugador = inputRatigueya.id
  // } else {
  //   alert("Selecciona una mascota");
  // }

  // extraerAtaques(mascotaJugador)
  // seleccionarMascotaEnemigo();
  // botonReiniciar.addEventListener("click", reiniciarJuego);
}

// function extraerAtaques(mascotaJugador){
//   let ataques
  
//   for (let i = 0; i < mokepones.length; i++){
//     if(mascotaJugador === mokepones[i].nombre){
//       ataques = mokepones[i].ataques
//     }
//   }
  
//   mostrarAtaques(ataques)
// }

// function mostrarAtaques(ataques){
  
//   ataques.forEach((ataque) => {
//       ataquesMokepon = `<button id="${ataque.id}" class="boton-de-ataque BAtaque"> ${ataque.nombre} </button>`
//       contenedorAtaques.innerHTML += ataquesMokepon
//   })
//   botonTierra = document.getElementById("boton-tierra");
//   botonFuego = document.getElementById("boton-fuego");
//   botonAgua = document.getElementById("boton-agua");
//   botones = document.querySelectorAll('.BAtaque')
// }

// function secuenciaAtaque(){
//   botones.forEach((boton) => {
//     boton.addEventListener('click',(e) => {
//       let t = e.target.textContent      
//       if(t === " Fuego "){
//         ataqueJugador.push("FUEGO")        
//         boton.style.background = "#112f58"
//         boton.disabled = true;
//       }else if(t === " Agua "){
//         ataqueJugador.push("AGUA")        
//         boton.style.background = "#112f58"
//         boton.disabled = true;
//       }else if(t === " Tierra "){
//         ataqueJugador.push("TIERRA")        
//         boton.style.background = "#112f58"
//         boton.disabled = true;
//       }else{        
//         console.log("Apretaste otro")
//       }
//       ataqueAleatorioEnemigo()
//     })
//   })

// }

// function seleccionarMascotaEnemigo() {
//   let mascotaAleatoria = aleatorio(0, mokepones.length -1);
//   spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
//   ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
//   secuenciaAtaque()
// }

// function ataqueAleatorioEnemigo() {
//   let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);


//   if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
//     ataqueEnemigo.push("FUEGO")
//   } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
//     ataqueEnemigo.push("AGUA")
//   } else {
//     ataqueEnemigo.push("TIERRA")
//   }

//   iniciarPelea()
// }

// function iniciarPelea(){
//   if(ataqueJugador.length === 5){
//     combate()
//   }
// }

// function indexAmbosOponentes( jugador, enemigo ){
//   indexAtaqueJugador = ataqueJugador[jugador]
//   indexAtaqueEnemigo = ataqueEnemigo[enemigo]
// }

// function combate() {

//   for(i = 0; i < ataqueJugador.length; i++){
//     let ataqueJ = ataqueJugador[i]
//     let ataqueE = ataqueEnemigo[i]

//     if (ataqueJ === ataqueE ) {
//       indexAmbosOponentes(i, i)
//       crearMensaje("EMPATE");
//       console.log("empate")
//     } else if (ataqueJ === "FUEGO" && ataqueE === "TIERRA") {
//       indexAmbosOponentes(i, i)
//       crearMensaje("GANASTE");
//       victoriasJugador++
//       spanVidasJugador.innerHTML = victoriasJugador
//       console.log("ganaste")
//     } else if (ataqueJ === "AGUA" && ataqueE === "FUEGO") {
//       indexAmbosOponentes(i, i)
//       crearMensaje("GANASTE");
//       victoriasJugador++
//       spanVidasJugador.innerHTML = victoriasJugador
//       console.log("ganaste")
//     } else if (ataqueJ === "TIERRA" && ataqueE === "AGUA") {
//       indexAmbosOponentes(i, i)
//       crearMensaje("GANASTE");
//       victoriasJugador++
//       spanVidasJugador.innerHTML = victoriasJugador
//       console.log("ganaste")
//     } else {
//       crearMensaje("PERDISTE");
//       indexAmbosOponentes(i, i)
//       victoriasEnemigo++;
//       spanVidasEnemigo.innerHTML = victoriasEnemigo
//       console.log("lost")
//     }
//   }


//   revisarVidas();
// }

// function revisarVidas() {
//   if (victoriasEnemigo === victoriasJugador) {
//     crearMensajeFinal("EMPATE");

//   } else if (victoriasEnemigo > victoriasJugador) {
//     crearMensajeFinal("Lo siento, perdiste :(");
//   }else if (victoriasJugador > victoriasEnemigo) {
//     crearMensajeFinal("FELICITACIONES! Ganaste :)");
//   }
// }

// function crearMensaje(resultado) {
//   let nuevoAtaqueDelJugador = document.createElement("p");
//   let nuevoAtaqueDelEnemigo = document.createElement("p");
//   sectionMensajes.innerHTML = resultado;
//   nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
//   nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
//   ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
//   ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
// }

// function crearMensajeFinal(resultadoFinal) {
//   sectionMensajes.innerHTML = resultadoFinal;
//   sectionReiniciar.style.display = "block";
// }

// function reiniciarJuego() {
//   location.reload();
// }

// function pintarPersonaje(){
//   capipepo.x = capipepo.x + capipepo.velocidadX
//   capipepo.y = capipepo.y + capipepo.velocidadY
//   lienzo.clearRect(0,0, mapa.width, mapa.height )
//   lienzo.drawImage(
//     capipepo.mapaFoto,
//     capipepo.x,
//     capipepo.y,
//     capipepo.ancho,
//     capipepo.alto
//   )
// }

// function moverDerecha(){
//   capipepo.velocidadX = 5
// }

// function moverIzquierda(){
//   capipepo.velocidadX = -5
// }

// function moverArriba(){
//   capipepo.velocidadY = -5
// }

// function moverAbajo(){
//   capipepo.velocidadY = 5
// }

// function aleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function detenerMovimiento(){
//   capipepo.velocidadX = 0
//   capipepo.velocidadY = 0
// }  
