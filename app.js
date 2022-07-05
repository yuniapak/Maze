//DOM calls and global variables

const lives = document.querySelector('.lives')
const live1 = document.querySelector('#Heart1')
const live2 = document.querySelector('#Heart2')
const live3 = document.querySelector('#Heart3')

//Board and element with in
const board = document.querySelector('#board')

//windows

const startWindow = document.querySelector('#start-window')
const winWindow = document.querySelector('#win')
const failWindow = document.querySelector('#fail')

//buttons

const startButton = document.querySelector('#start')
const againButton = document.querySelector('#again')

//character
const character = document.querySelector('#character')
character.style.gridRow = 3
character.style.gridColumn = 1
const wall = document.querySelectorAll('#wall')
//game speed
let winRow = 4
let winColumn = 7
//velocity for moving character

//////////////////////////
//Functions

const startGame = () => {
  startWindow.style.display = 'block'
}
startGame()

//game logic
const winFunction = () => {
  if (character.style.gridRow === 4 || character.style.gridColumn === 7) {
    console.log('win')

    winWindow.style.display = 'block'
  } else if (
    character.style.gridRow === wall &&
    character.style.gridColumn === wall
  ) {
    console.log('hit')
  } else {
    console.log('error')
  }
}
////////////////////////////
//EventListeners
//creating board

// window.addEventListener('load', () => {
//   character.style.gridRow = 3
//   character.style.gridColumn = 1
//   character.style.position = 'abosolute'
// })
let boardGrid = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 0, 11, 12, 13, 14],
  [0, 0, 0, 0, 19, 20, 21],
  [22, 23, 0, 25, 0, 0, 'f'],
  [29, 30, 0, 0, 0, 34, 35],
  [36, 37, 38, 39, 40, 41, 42]
]

window.addEventListener('load', () => {
  for (let i of boardGrid) {
    for (let j of i) {
      let square = document.createElement('div')
      square.innerHTML = j
      square.className = 'square'
      board.appendChild(square)
      //board.appendChild(character)
      if (j === 0) {
        square.id = 'maze'
        let mazeSq = document.querySelectorAll('#maze')
      } else if (j === 'f') {
        square.id = 'maze'
      } else if (j != 0) {
        square.id = 'wall'
      } else {
        console.log('error')
      }
    }
  }
})

//event listener for buttons to move character
//start position

//button key

const movingPea = () => {
  let moveCharct = 1
  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
      character.style.gridColumn =
        parseInt(character.style.gridColumn) - moveCharct
    } else if (e.key === 'ArrowRight') {
      character.style.gridColumn =
        parseInt(character.style.gridColumn) + moveCharct
    } else if (e.key === 'ArrowUp') {
      character.style.gridRow = parseInt(character.style.gridRow) - moveCharct
    } else if (e.key === 'ArrowDown') {
      character.style.gridRow = parseInt(character.style.gridRow) + moveCharct
    } else {
      console.log('not working')
    }
    console.log('row ' + character.style.gridRow)
    console.log('column ' + character.style.gridColumn)
    winFunction()
  })
}

interval = setInterval(movingPea(), 1000)
const changemove = () => {
  clearInterval(interval)
}
//again button if lives still there keep on the lvl else start from lvl 1 lives back

//startButton
startButton.addEventListener('click', () => {
  startWindow.style.display = 'none'
})
