function findMostFrequentChar(str) {
  const charMap = {}
  let maxCount = 0
  let mostFrequentChar = ''

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1

    if (charMap[char] > maxCount) {
      maxCount = charMap[char]
      mostFrequentChar = char
    }
  }

  return { char: mostFrequentChar, count: maxCount }
}

const str = 'Hello, world!'
const result = findMostFrequentChar(str)
console.log(`Most frequent character: ${result.char}`)
console.log(`Count: ${result.count}`)
