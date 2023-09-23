// Promise.resolve().then(() => console.log('a'))

// console.log('b')
// setTimeout(() => console.log('c'), 0)

// A dom.queryAttribute('day')
// B dom.getAttribute('day')

// C dom['day']
// D dom.day

// s='0011' ,翻转长度为2的前缀得到'1111',总翻转字符数为2
// s='0101101' 翻转长度为3的前缀得到'101101',再翻转长度为2的前缀得到'011101',再翻转长度为1的前缀得到'111101'
// 再翻转长度为2的后缀得到 '111110'最后翻转长度为1的后缀 得到'111111'

// 补全函数
// function minimumFlips(s) {

// }
function minimumFlips(s) {
  const n = s.length
  let flipsWith0 = 0 // 记录将前缀翻转成 '0' 需要的次数
  let flipsWith1 = 0 // 记录将前缀翻转成 '1' 需要的次数

  // 首先考虑将前缀翻转成 '0'
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && s[i] !== '0') {
      flipsWith0++
    } else if (i % 2 !== 0 && s[i] !== '1') {
      flipsWith0++
    }
  }

  // 然后考虑将前缀翻转成 '1'
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && s[i] !== '1') {
      flipsWith1++
    } else if (i % 2 !== 0 && s[i] !== '0') {
      flipsWith1++
    }
  }

  // 取两种情况中的最小值
  return Math.min(flipsWith0, flipsWith1)
}

// 测试例子
console.log(minimumFlips('0011')) // 输出: 2
console.log(minimumFlips('010101')) // 输出: 9
