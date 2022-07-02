//DOM calls and global variables

const lives = document.querySelector('.lives')
const live1 = document.querySelector('#Heart1')
const live2 = document.querySelector('#Heart2')
const live3 = document.querySelector('#Heart3')
const board = document.querySelector('#board')
const gridSq = document.querySelectorAll('.grid')
//action sq
const liveSq = document.querySelectorAll('#lv')
//const finSq = document.querySelector('#fin')

//windows

const startWindow = document.querySelector('#start-window')
const winWindow = document.querySelector('#win')
const failWindow = document.querySelector('#fail')

//buttons

const startButton = document.querySelector('#start')
const againButton = document.querySelector('#again')

//character
const character = document.querySelector('#character')
let moveCharct = 40
//game speed
let gameSpeed = 7
//velocity for moving character
let xVelocity = 0
let yVelocity = 0

let gameBoard = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
]
//////////////////////////
//Functions

//game loop
const game = () => {
  console.log('game')
  setTimeout(game, 1000 / gameSpeed)
}
//game()
//character speed
// const characterSpeed = () =>{
//     character.style.top = character.style.top +
// }

//game logic
const win = () => {
  if (
    character.style.top ===  ||
    character.style.left === 
  ) {
    console.log('win')

    winWindow.style.display = 'block'
    //window.removeEventListener('keyup', (e))
  }else if(){
    //for try again
    console.log('another try')
    failWindow.style.display = "block"
    live3.style.display = 'none'
    if(live3.style.display = 'none' ){
    live2.style.display = 'none'
    }else if(live3.style.display = 'none' && live2.style.display = 'none'){
        //loose
        live1.style.display = 'none'
        //button to start from the beggining with 3 hearts
    }
  }else{
    console.log('error!')
  }
}

////////////////////////////
//EventListeners
//event listener for buttons to move character
//start position
window.addEventListener('load', () => {
  character.style.left = -20 + 'px'
  character.style.top = 160 + 'px'
  character.style.position = 'abosolute'
})
//button key
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      character.style.left = parseInt(character.style.left) - moveCharct + 'px'
      break
    case 'ArrowRight':
      character.style.left = parseInt(character.style.left) + moveCharct + 'px'
      break
    case 'ArrowUp':
      character.style.top = parseInt(character.style.top) - moveCharct + 'px'
      break
    case 'ArrowDown':
      character.style.top = parseInt(character.style.top) + moveCharct + 'px'
      break
  }
})

//again button if lives still there keep on the lvl else start from lvl 1 lives back
