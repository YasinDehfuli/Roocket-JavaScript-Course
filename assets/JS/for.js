let star = '\n'

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= i; j++) {
    star += '#'
  }
  star += '\n'
}

for (let i = 7; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    star += '#'
  }
  star += '\n'
}

console.log(star)
