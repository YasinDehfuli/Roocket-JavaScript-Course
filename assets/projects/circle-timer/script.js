const startBox = document.querySelector('.startBox');
const submitButton = document.querySelector('#submit');
const inputValue = document.querySelector('#input');
const errorMessage = document.querySelector('.errorMessage');
const circleCounter = document.querySelector('.c100');
const countMessage = document.querySelector('.countMessage');
const circleTime = document.querySelector('.circleTime');


submitButton.addEventListener('click', (e) => {
  let time = parseInt(inputValue.value)
  
  if (isNaN(time)) {
    errorMessage.textContent = 'لطفا فیلد را به درستی پر کنید !';
    errorMessage.classList.add('active');
    
    return;
  }
  
  errorMessage.classList.remove('active');
  startBox.classList.add('di-active');
  circleCounter.classList.add('active');
  countMessage.textContent = 'لطفا شکیبا باشید تا زمان به اتمام برسد!!'
  circleTime.innerText = time;
  
  const timerId = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerId);
      circleCounter.classList.remove('active');
      startBox.classList.remove('di-active');
      countMessage.textContent = 'شمارش به پایان رسید !!'
      
    }
    
    time -= 1;
    circleTime.innerText = time;
  }, 1000)
  
  console.log(time)
})

