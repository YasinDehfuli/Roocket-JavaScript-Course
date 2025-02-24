let event = document.querySelector('#event')

event.onclick = event => {
  event.target.style.backgroundColor = 'black'
  event.target.style.color = 'white'
}

event.ondblclick = event => {
  event.target.style.backgroundColor = 'white'
  event.target.style.color = 'black'
}