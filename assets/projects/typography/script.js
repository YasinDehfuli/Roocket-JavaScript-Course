const area = document.querySelector('.hero')
const item = area.querySelector('h1')
const limit = 140 // px

area.addEventListener('mousemove', (mousePosition) => {
  const {offsetWidth: width, offsetHeight: height} = area
  
  let x = mousePosition.x
  let y = mousePosition.y
  
  let limitX = Math.round((x / width * limit))
  let limitY = Math.round((y / width * limit))
  
  console.log(x, y, limitX, limitY)
  
  item.style.textShadow = `
  ${limitX}px ${limitY}px 0 rgba(238,83,83,.7),
  ${limitX * -1}px ${limitY}px 0 rgba(80,20,10,.7),
  ${limitY}px ${limitX * -1}px 0 rgba(10,29,10,.7),
  ${limitY * -1}px ${limitX }px 0 rgba(200,110,100,.7)
  `
  
  
})