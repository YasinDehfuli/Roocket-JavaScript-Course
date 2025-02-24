function sum(a = 1, b = 1) {
  console.log('a:', a, 'b:', b)
  console.log('a * b : ', a * b)
}

sum(2, 10)
sum(10)


function restArg(...args) {
  return args.reduce((pre, current) => {
    return pre + current
  })
}

console.log(restArg(1, 2, 3, 4, 6, 100, 200, 300))