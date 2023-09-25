// TODO: 题目一
console.log({} === {}) // false
console.log(typeof null === 'object') // true

// TODO: 题目二
var o = {
  a: 100,
  b: {
    a: 10,
    fn: function () {
      console.log(this.a)
      console.log(this)
    },
  },
}
var j = o.b.fn
j()

// TODO: 题目三  计算数组中的奇数的平均值
const numbers = [1, 2, 3, 4, 5, 6, 7]

function calculate(arr) {
  const newArr = arr.filter((number) => number % 2 !== 0)

  if (newArr.length === 0) {
    return 0
  }

  let sum = 0
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
  }
  let average = sum / newArr.length
  return average
}

console.log(calculate(numbers))

// TODO: 题目四 计算字符串中出现频率最高的字符 ，返回一个数组
const inputString = 'abcaabbccc'

function mostFrequentChars(str) {
  const charCount = {}
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }

  let max = 0
  for (let char in charCount) {
    if (charCount[char] > max) {
      max = charCount[char]
    }
  }

  const arr = []
  for (const char in charCount) {
    if (charCount[char] === max) {
      arr.push(char)
    }
  }
  return arr
}

console.log(mostFrequentChars(inputString))
