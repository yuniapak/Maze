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
//let moveCharct = 40

const moveCharct = (e) => {
    for 
    //set as speed second + 40px move 
}
//game speed

//velocity for moving character

//////////////////////////
//Functions
//Creating grid

// let exitCombination = [boardGrid[2[0]], boardGrid[2[1]], boardGrid[2[2]], boardGrid[3[2]], boardGrid[4[2]], boardGrid[4[3]], boardGrid[4[4]], boardGrid[3[4]], boardGrid[3[5]], boardGrid[3[6]]]
//game logic
const win = () => {
  if (character.style.top === winCombination || character.style.left) {
    console.log('win')

    winWindow.style.display = 'block'
    // window.removeEventListener('keyup', (e))
    //   }else if(gridSq){
    //     //for try again
    //     console.log('another try')
    //     failWindow.style.display = "block"
    //     live3.style.display = 'none'
    //     if(live3.style.display = 'none'){
    //     live2.style.display = 'none'
    //     }else if(live3.style.display = 'none' || live2.style.display = 'none' ){
    //         //loose
    //         live1.style.display = 'none'
    //         //button to start from the beggining with 3 hearts
    //     }
    //   }else{
    //     console.log('error!')
  }
}

////////////////////////////
//EventListeners
//creating board
let boardGrid = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [0, 0, 0, 18, 19, 20, 21],
  [22, 23, 0, 25, 0, 0, 0],
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
      } else if (j !== 0) {
        hit = () => {
          console.log('hit')
        }
      }

      //   let square = document.querySelectorAll('.square')
      //   maze[k] === (square.class = 'maze')
    }
  }
})

//event listener for buttons to move character
//start position
window.addEventListener('load', () => {
  character.style.left = -20 + 'px'
  character.style.top = 180 + 'px'
  character.style.position = 'abosolute'
})
//button key

window.addEventListener('keydown', (e) => {
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
  //win()
})

//again button if lives still there keep on the lvl else start from lvl 1 lives back
