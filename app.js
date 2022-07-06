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

// const finale = document.querySelector('#finale')

//grid

//fin.innerHTML = document.querySelector('#finale')
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

////////////////////////////
//EventListeners
//creating board

let boardGrid = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 0, 11, 12, 13, 14],
  [0, 0, 0, 0, 19, 20, 21],
  [22, 23, 0, 25, 0, 0, 'fin'],
  [29, 30, 0, 0, 0, 34, 35],
  [36, 37, 38, 39, 40, 41, 42]
]
const makeGrid = () => {
  for (let i of boardGrid) {
    for (let j of i) {
      let square = document.createElement('div')
      square.innerHTML = j

      square.className = 'square'
      board.appendChild(square)
      //board.appendChild(character)
      if (j === 0) {
        square.id = 'maze'
      } else if (j === 'fin') {
        square.id = 'fin'
      } else {
        square.id = 'wall'
      }
    }
  }
}

makeGrid()
let mazeSq = document.querySelectorAll('#maze')
let wall = document.querySelectorAll('#wall')
// console.log(wall)
// wall.forEach((wallsq) => {
//   wallsq.innerText = '100'
//   //   wallsq.style.opacity = 0
// })
let fin = document.querySelector('#fin')
//event listener for buttons to move character
//winFunction

const winFunction = () => {
  if (
    parseInt(character.style.gridColumn) === winColumn &&
    parseInt(character.style.gridRow) === winRow
  ) {
    console.log('win')
    winWindow.style.display = 'block'
  } else if (
    parseInt(character.style.gridColumn) === 1 &&
    parseInt(character.style.gridRow) === 2
  ) {
    console.log('hit', character.style.gridRow, character.style.gridColumn)
    failWindow.style.display = 'block'
    live3.style.display = 'none'
  } else {
    console.log('error1', character.style.gridRow, character.style.gridColumn)
  }
}
//button key

//const movingPea = () => {
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
  winFunction()
  console.log('row ' + character.style.gridRow)
  console.log('column ' + character.style.gridColumn)
})

//}
//movingPea()
// interval = setInterval(movingPea(), 1000)
// const changemove = () => {
//   clearInterval(interval)
// }
//again button if lives still there keep on the lvl else start from lvl 1 lives back

//startButton
startButton.addEventListener('click', () => {
  startWindow.style.display = 'none'
})
//playAgain button
againButton.addEventListener('click', () => {
  failWindow.style.display = 'none'
  character.style.gridRow = 3
  character.style.gridColumn = 1
})
