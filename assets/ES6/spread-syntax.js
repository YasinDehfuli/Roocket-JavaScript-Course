const list = [1, 2, 3, 4]
const list2 = [5, 6, 7, 8, 9]
const list3 = [10, 11, 12, 13, 14]
const list4 = [17, 18, 19, 20, 21]

const list5 = [...list, ...list2, ...list3, 15, 16, ...list4]


console.log(list5)