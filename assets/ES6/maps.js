const list = ['one', 'two', 'three', 'four'];

const listMapper = new Map();

listMapper.set('one', '1');
listMapper.set('two', '2');
listMapper.set('three', '3');
listMapper.set('four', '4');

console.log('list ==> ', listMapper)

for (let [key, value] of listMapper.entries()) {
  console.log('keys and values ==>', key,value)
}


for (let key of listMapper.keys()) {
  console.log('keys ==>',key)
}
