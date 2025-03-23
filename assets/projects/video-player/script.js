const playerArea = document.querySelector('.myplayer');
const video = playerArea.querySelector('video');
const controls = playerArea.querySelector('.myplayer__controls')

const play = controls.querySelector('.play')
const rewind = controls.querySelector('.rewind')
const forward = controls.querySelector('.forward')

const timer = controls.querySelector('.timer')
let currentTime = timer.querySelector('.currentTime')
let videoTime = timer.querySelector('.videoTime')


video.addEventListener('timeupdate', function () {
  currentTime.textContent = doGetTime(video.currentTime)
})

play.addEventListener('click', () => {
  doGetVideoDuration()
  if (video.paused) {
    video.play()
    doChangePlayerIcon()
  } else {
    video.pause()
    doChangePlayerIcon()
  }
})

rewind.addEventListener('click', () => {
  video.currentTime -= 5
})

forward.addEventListener('click', () => {
  video.currentTime += 5
})

function doChangePlayerIcon() {
  const icon = playerArea.querySelector('.icon')
  
  icon.classList.toggle('ion-md-pause')
  icon.classList.toggle('ion-md-play')
}

function doGetTime(time) {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - (minutes * 60))
  let minuteValue
  let secondValue
  
  if (minutes < 10) {
    minuteValue = '0' + minutes
  } else (
    minuteValue = minutes
  )
  
  if (seconds < 10) {
    secondValue = '0' + seconds
  } else (
    secondValue = seconds
  )
  return currentTime.innerText = minuteValue + ':' + secondValue
}

function doGetVideoDuration() {
  videoTime.textContent = doGetTime(video.duration)
}