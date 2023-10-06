// 定义一个二进制字符串

// 使用API
var binaryString = '1101'
console.log(parseInt(binaryString, 2))

// 自定义写法
let a = 5
console.log((a <<= 1))

function binaryToDecimal(binaryString) {
  // 初始化结果为0
  let decimalNumber = 0

  // 遍历二进制字符串的每一位
  for (let i = 0; i < binaryString.length; i++) {
    // 将结果左移1位，相当于乘以2
    decimalNumber <<= 1

    // 如果当前位是1，则将结果加1
    if (binaryString[i] === '1') {
      decimalNumber |= 1
    }
  }

  return decimalNumber
}

// 调用函数将二进制字符串转换为十进制数
var binaryString = '1101'
var decimalNumber = binaryToDecimal(binaryString)

console.log(decimalNumber)
