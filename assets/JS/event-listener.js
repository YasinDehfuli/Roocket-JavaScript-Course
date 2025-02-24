let getBox = document.querySelector('.box')
let getMiniBox = document.querySelector('.mini-box')
let stopHref = document.querySelector('.stop-pre')

getBox.addEventListener('click', () => {
  console.log('Box gotten')
})

getMiniBox.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('MiniBox gotten')
})

stopHref.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Stop href worked')
})