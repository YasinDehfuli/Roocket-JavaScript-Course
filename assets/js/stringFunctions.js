let fullName = 'ٍElon Musk';
let fullNameWithSpace = '    ٍElon Musk     ';

// concat two strings
console.log('concat is ==>' ,fullName.concat(' Is Here'))

console.log('search in string' ,fullName.indexOf('us'))

console.log('replacing ===>',fullName.replace('Elon','Javad'))

console.log('the length chars of string ===>',fullName.length)

console.log('searched in string ===>',fullName.search('Musk'))

console.log('lower case string ===>',fullName.toLowerCase())

console.log('uppercase string ===>',fullName.toUpperCase())

console.log('repeat is here ===>',fullName.repeat(3))

console.log('shown string from index to length ===>', fullName.substr(1,4))

console.log('remove useless spaces ===>', fullNameWithSpace.trim())

console.log('split string with a special char ===>', fullName.split(' '))

