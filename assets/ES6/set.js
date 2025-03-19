const arr = new Set([1, 2, 2, 2, 3, 34, 45, 5, 5, 5, 5, 2, 2, 2, 2, 6, 7, 5, 5, 5, 4]);

console.log(arr.add(22))
console.log(arr.has(45))
console.log(arr.size)
console.log(arr.delete(34))
console.log(arr)
arr.clear()
console.log(arr)

// set shows just unique numbers in array

