// Sections
const sectionInitGame = document.getElementById("init-game")
const sectionSelectDinosaurs = document.getElementById("select-dinosaurs")
const sectionDinosaursSelected = document.getElementById("dinosaurs-selected")
const sectionDinosaursList = document.getElementById('dinosaursList')

// Buttons

// Sections hidden
sectionSelectDinosaurs.style.display = 'none'

// Dinosaurs
let dinosaurs = []

// Variables
let optionDinosaurs 
let dinosaurPlayer 
let dinosaurEnemy

class Dinosaur {
  constructor(name, photo, life){
    this.name = name
    this.photo = photo
    this.life = life
  }
}

let stegosaurus = new Dinosaur('stegosaurus', './assets/img/dino_violet.svg', 5)
let tRex = new Dinosaur('tRex', './assets/img/dino_red.svg', 5)
let triceratops = new Dinosaur('triceratops', './assets/img/dino_blue.svg', 5)

dinosaurs.push(stegosaurus, tRex, triceratops)

function initGame() { 
  sectionInitGame.style.display = 'none'
  sectionSelectDinosaurs.style.display = 'grid'

  dinosaurs.forEach((dinosaur) => {
    optionDinosaurs = `
      <div class="selectDinosaurs__tarjetas__tarjeta" onclick="checkDinosaursSelect('${dinosaur.name}')">
        <input id="${dinosaur.name}" type="radio" name="${dinosaur.name}">
        <img src="${dinosaur.photo}" alt="${dinosaur.name}" />
      </div>
      `
      sectionDinosaursList.innerHTML += optionDinosaurs
  })
}

function checkDinosaursSelect(name){
  dinosaurs.forEach((dinosaur) => { 
      if(name === dinosaur.name){
        dinosaurPlayer = name
        sectionDinosaursSelected.innerHTML = `
          <div>
            <h2>${dinosaur.name}</h2>

          </div>
          <div class="selectDinosaurs__dinosaurs__img">
            <img src="${dinosaur.photo}" alt="${dinosaur.name}" />
          </div>
        `
        
      }else{
        return
      }
  })
  console.log(name)
}



