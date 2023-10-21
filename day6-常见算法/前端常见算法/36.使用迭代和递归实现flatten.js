// TODO: 迭代实现
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function (arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr))

// TODO: 递归实现

const flatten1 = (array) =>
  array.reduce(
    (acc, cur) =>
      Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur],
    []
  )
console.log(flatten1(arr))

// TODO: 字符串转化

let res = arr
  .join(',')
  .split(',')
  .map((item) => Number(item))
console.log(res)
