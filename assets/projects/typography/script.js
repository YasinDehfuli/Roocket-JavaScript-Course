const area = document.querySelector('.hero')
const item = area.querySelector('.item')
const limit = 500 // px

area.addEventListener('mousemove', (mousePosition) => {
  const {offsetWidth: width, offsetHeight: height} = area
  
   let x = mousePosition.x
   let y = mousePosition.y
  
  console.log( width, height, x, y )
  
})