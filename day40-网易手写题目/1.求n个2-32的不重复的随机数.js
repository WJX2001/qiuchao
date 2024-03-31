// TODO: 求n个2-32的不重复的随机数

function getRandomNumbers (n, min, max) {
  let nums = []

  while(nums.length <n) {
    let num = Math.floor(Math.random() * (max -min +1))+min
    if(!nums.includes(num)) {
      nums.push(num)
    }
  }
  return nums
}

console.log(getRandomNumbers(5, 2, 32))
