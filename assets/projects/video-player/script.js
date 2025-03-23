const playerArea = document.querySelector('.myplayer');
const video = playerArea.querySelector('video');
const controls = playerArea.querySelector('.myplayer__controls')

const play = controls.querySelector('.play')
const rewind = controls.querySelector('.rewind')
const forward = controls.querySelector('.forward')

const timer = controls.querySelector('.timer')
let currentTime = timer.querySelector('.currentTime')
let videoTime = timer.querySelector('.videoTime')

const volumeToggle = controls.querySelector('.volume .icon')
let volumeProgress = controls.querySelector('.volume .volume__progress')
let volumeProgressBarInput = controls.querySelector('#volume_bar')

const fullScreen = controls.querySelector('.fullscreen')

let progressBar = controls.querySelector('.controls__progressbar-current')


video.addEventListener('timeupdate', function () {
  currentTime.textContent = doGetTime(video.currentTime)
  
  let barLength = (video.currentTime / video.duration) * 100
  progressBar.style = `background : linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`
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

progressBar.addEventListener('input', function () {
  video.currentTime = (this.value / 100) * video.duration
})

rewind.addEventListener('click', () => {
  video.currentTime -= 5
})

forward.addEventListener('click', () => {
  video.currentTime += 5
})

volumeToggle.addEventListener('click', function () {
  volumeProgress.classList.toggle('active')
})

volumeProgressBarInput.addEventListener('input', function () {
  video.volume = this.value / 100
  this.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 50%);`
})

fullScreen.addEventListener('click', () => {
  toggleFullScreen()
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

function toggleFullScreen() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (playerArea.requestFullscreen) {
        playerArea.requestFullscreen();
      }
      else if (playerArea.mozRequestFullScreen) {
        playerArea.mozRequestFullScreen();
      }
      else if (playerArea.webkitRequestFullScreen) {
        playerArea.webkitRequestFullScreen();
      }
      else if (playerArea.msRequestFullscreen) {
        playerArea.msRequestFullscreen();
      }
    }
  }
}
