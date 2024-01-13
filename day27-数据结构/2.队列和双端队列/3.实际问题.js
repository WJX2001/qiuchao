// TODO: 双端队列 解决回文
function palindromeChecker (str) {
  if (str === undefined || str === null || (str !== null && str.length === 0)) {
    return false
  }

  const dequeue = []
  // 转换为小写,移除所有空格
  const lowerStr = str.toLowerCase().replace('/\s/g', '')
  let isEqual = true

  let firstChar, lastChar
  for (let i = 0; i < lowerStr.length; i++) {
    dequeue.push(lowerStr.charAt(i))
  }

  while (dequeue.length > 1 && isEqual) {
    firstChar = dequeue.shift()
    lastChar = dequeue.pop()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}

console.log(palindromeChecker('a'))      // true
console.log(palindromeChecker('aa'))     // true
console.log(palindromeChecker('kayak'))  // true
console.log(palindromeChecker('level'))  // true
console.log(palindromeChecker('ABBC'))  // false



// 回文串
var isPalindrome = function (s) {
  if (s === undefined || s === null || (s !== null && s.length === 0)) {
    return false
  }

  let dequeue = []
  let flag = true
  let sb = ''
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    if (/[a-zA-Z0-9]/.test(c)) {
      sb += c.toLocaleLowerCase()
    }
  }

  for (let c of sb) {
    dequeue.push(c)
  }

  while (dequeue.length > 1 && flag) {
    let first = dequeue.shift()
    let last = dequeue.pop()

    if (first !== last) {
      flag = false
    }
  }
  return flag

}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true




// TODO: 击鼓传花

function hotPotato (elementList, num) {
  const queue = []
  const eleminatedList = []
  for (let c of elementList) {
    queue.push(c)
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift())
    }
    eleminatedList.push(queue.shift())
  }
  return {
    eliminated: elementList,
    winner: queue.shift()
  }
}

const names = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
const result = hotPotato(names, 7)
for (let i = 0; i < result.eliminated.length; i++) {
  console.log(`${result.eliminated[i]}在击鼓传花游戏中被淘汰。`)
}
console.log(`胜利者：${result.winner}`)