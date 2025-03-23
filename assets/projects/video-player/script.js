const playerArea = document.querySelector('.myplayer');
const video = playerArea.querySelector('video');
const controls = playerArea.querySelector('.myplayer__controls')

const play = controls.querySelector('.play')
const rewind = controls.querySelector('.rewind')
const forward = controls.querySelector('.forward')

play.addEventListener('click', () => {
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