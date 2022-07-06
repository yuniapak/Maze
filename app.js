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
const lastWindow = document.querySelector('#againWindow')
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
  if (live1.style.display != 'none') {
    live1.style.display = 'none'
  } else if (live2.style.display === 'none' && live1.style.display === 'none') {
    live3.style.display = 'none'
    lastWindow.style.display = 'block'
  } else if (live1.style.dispaly != 'block') {
    live2.style.display = 'none'
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
///LEVEL 2/////////////////
const board1 = document.querySelector('#board1')
const character1 = document.querySelector('#character1')
// character1.style.gridColumn = 1
// character1.style.gridRow = 4
//creating board

let boardGrid1 = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 0, 0, 0, 0, 0, 0, 16],
  [17, 0, 19, 20, 0, 22, 23, 24],
  [0, 0, 0, 28, 0, 30, 31, 32],
  [33, 0, 35, 0, 0, 38, 0, 0],
  [41, 42, 43, 0, 45, 46, 0, 48],
  [49, 50, 51, 0, 0, 0, 0, 56]
]
const makeGridLvl2 = () => {
  for (let i of boardGrid1) {
    for (let j of i) {
      let square1 = document.createElement('div')
      square1.innerHTML = j
      square1.className = 'square1'
      board1.appendChild(square1)
      //board.appendChild(character)
      if (j === 0) {
        square1.id = 'maze1'
      } else if (j === 'fin1') {
        square1.id = 'fin1'
      } else {
        square1.id = 'wall1'
      }
    }
  }
}
makeGridLvl2()

character1.style.gridColumn = 1
character1.style.gridRow = 4
let moveCharct1 = 1
window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    character1.style.gridColumn =
      parseInt(character1.style.gridColumn) - moveCharct1
  } else if (e.key === 'ArrowRight') {
    character1.style.gridColumn =
      parseInt(character1.style.gridColumn) + moveCharct1
  } else if (e.key === 'ArrowUp') {
    character1.style.gridRow = parseInt(character1.style.gridRow) - moveCharct1
  } else if (e.key === 'ArrowDown') {
    character1.style.gridRow = parseInt(character1.style.gridRow) + moveCharct1
  } else {
    console.log('not working')
  }
  //winFunction1()
  console.log('row ' + character1.style.gridRow)
  console.log('column ' + character1.style.gridColumn)
})
