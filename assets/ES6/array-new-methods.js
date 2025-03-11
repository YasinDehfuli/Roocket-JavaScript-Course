const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// creates a list of answers
console.log(list.filter(item => item % 2 === 0));
// when find first answer return it
console.log(list.find(item => item % 2 === 0));

// will replace a value to index that you told
console.log(list.fill(false,5,7))

console.log(list.copyWithin(4,8,10))