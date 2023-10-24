// 将 '10000000000' 形式的字符串，以每 3 位进行分隔展示 '10.000.000.000'
let str = '10000000000'

const splitStr = (str) => {
  return str
    .split('')
    .reverse()
    .reduce((acc, cur, index) =>
      (index + 1) % 3 === 0 ? '.' + cur + acc : cur + acc
    )
}

console.log(splitStr(str))
