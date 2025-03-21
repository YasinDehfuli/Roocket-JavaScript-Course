const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value)
})