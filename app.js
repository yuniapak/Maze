//DOM calls and global variables

const lives = document.querySelector('.lives')
const live1 = document.querySelector('#Heart1')
const live2 = document.querySelector('#Heart2')
const live3 = document.querySelector('#Heart3')

const lvl = document.querySelector('h4')

//Board and element with in
const board = document.querySelector('#board')

//windows

const startWindow = document.querySelector('#start-window')
const winWindow = document.querySelector('#win')
const failWindow = document.querySelector('#fail')

//buttons

const startButton = document.querySelector('#start')
const againButton = document.querySelector('#again')
const nextLvlButton = document.querySelector('#nextLvl')
//character
const character = document.querySelector('#character')
character.style.gridRow = 3
character.style.gridColumn = 1

//win Grid
let winRow = 4
let winColumn = 7

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
let fin = document.querySelector('#fin')

//Heart count

const hearts = () => {
  if (live3.style.display != 'none') {
    live3.style.display = 'none'
  } else if (live3.style.dispaly != 'block') {
    live2.style.display = 'none'
  } else if (live2.style.display === 'none') {
    live1.style.display === 'none'
  } else {
    console.log('something went wrong')
  }
}

//win Function
const winFunction = () => {
  if (
    parseInt(character.style.gridColumn) === winColumn &&
    parseInt(character.style.gridRow) === winRow
  ) {
    console.log('win')
    winWindow.style.display = 'block'
  } else if (
    (parseInt(character.style.gridColumn) === 1 &&
      parseInt(character.style.gridRow) === 2) ||
    (parseInt(character.style.gridColumn) === 1 &&
      parseInt(character.style.gridRow) === 4) ||
    (parseInt(character.style.gridColumn) === 2 &&
      parseInt(character.style.gridRow) === 2) ||
    (parseInt(character.style.gridColumn) === 2 &&
      parseInt(character.style.gridRow) === 4) ||
    (parseInt(character.style.gridColumn) === 1 &&
      parseInt(character.style.gridRow) === 4) ||
    (parseInt(character.style.gridColumn) === 3 &&
      parseInt(character.style.gridRow) === 1) ||
    (parseInt(character.style.gridColumn) === 3 &&
      parseInt(character.style.gridRow) === 6) ||
    (parseInt(character.style.gridColumn) === 4 &&
      parseInt(character.style.gridRow) === 2) ||
    (parseInt(character.style.gridColumn) === 4 &&
      parseInt(character.style.gridRow) === 4) ||
    (parseInt(character.style.gridColumn) === 4 &&
      parseInt(character.style.gridRow) === 6) ||
    (parseInt(character.style.gridColumn) === 5 &&
      parseInt(character.style.gridRow) === 3) ||
    (parseInt(character.style.gridColumn) === 5 &&
      parseInt(character.style.gridRow) === 6) ||
    (parseInt(character.style.gridColumn) === 6 &&
      parseInt(character.style.gridRow) === 3) ||
    (parseInt(character.style.gridColumn) === 6 &&
      parseInt(character.style.gridRow) === 5) ||
    (parseInt(character.style.gridColumn) === 7 &&
      parseInt(character.style.gridRow) === 3) ||
    (parseInt(character.style.gridColumn) === 7 &&
      parseInt(character.style.gridRow) === 5)
  ) {
    hearts()
    console.log('hit', character.style.gridRow, character.style.gridColumn)
    failWindow.style.display = 'block'
  } else {
    console.log('error1', character.style.gridRow, character.style.gridColumn)
  }
}
//Button key

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
nextLvlButton.addEventListener('click', () => {
  winWindow.style.display = 'none'
  board.style.display = 'none'
  lvl.innerText = 'Level 2'
})
