let str = 'AbC'

// TODO: 常规写法
function transCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}

console.log(transCase(str))

// TODO: 异或写法

function transCase1(str) {
  return str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) ^ 32))
}
console.log(transCase1(str))
