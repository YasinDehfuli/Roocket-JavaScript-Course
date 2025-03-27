const submitButton = document.querySelector('#submit');
const inputValue = document.querySelector('#input');
const circleCounter = document.querySelector('.c100');
const countMessage = document.querySelector('.countMessage');
const circleTime = document.querySelector('.circleTime');


submitButton.addEventListener('click', (e) => {
  let time = parseInt(inputValue.value)
  
  if (isNaN(time)) return toggleErrorMessage({show: true, message: 'لطفا فیلد را به درستی پر کنید !'})
  
  
  toggleErrorMessage({show: false})
  toggleStartBox({show: true})
  circleCounter.classList.add('active');
  mainMessage({message: 'لطفا شکیبا باشید تا زمان به اتمام برسد!!'})
  circleTime.innerText = time;
  
  let originalSeconds = time
  let lastTime = ''
  const timerId = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerId);
      circleCounter.classList.remove('active');
      toggleStartBox({show: false})
      mainMessage({message: 'شمارش به پایان رسید !!'})
      circleCounter.classList.remove(lastTime)
      inputValue.value = '';
      return;
    }
    
    if (lastTime) circleCounter.classList.remove(lastTime)
    
    time -= 1;
    let percent = Math.floor(((originalSeconds - time) / originalSeconds) * 100)
    lastTime = `p${percent}`
    circleTime.innerText = time;
    circleCounter.classList.add(`p${percent}`)
  }, 1000)
  
  console.log(time)
})

let toggleErrorMessage = ({show, message}) => {
  const errorMessage = document.querySelector('.errorMessage');
  
  if (show) {
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
  } else {
    errorMessage.textContent = null;
    errorMessage.classList.remove('active');
  }
}

let toggleStartBox = ({show}) => {
  const startBox = document.querySelector('.startBox');
  
  if (show) {
    startBox.classList.add('di-active');
  } else {
    startBox.classList.remove('di-active');
  }
}

let mainMessage = ({message}) => {
  countMessage.textContent = message
}