var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// TODO: 写法一：使用迭代器函数
function* iterArray(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      yield* iterArray(arr[i])
    }
  } else {
    yield arr
  }
}

const res = [...iterArray(arr)]

let res1 = [...new Set(res)]
console.log(res1)

// TODO: 写法二：变为字符串 进行切割
let arrStr = arr.toString().split(',')
let res2 = [...new Set(arrStr)]
console.log(res2)

// TODO: 写法三：递归写法
Array.prototype.flat = function () {
  return [].concat(
    ...this.map((item) => (Array.isArray(item) ? item.flat() : [item]))
  )
}

Array.prototype.unique = function () {
  return [...new Set(this)]
}

const sort = (a, b) => a - b

console.log(arr.flat().unique().sort(sort))
