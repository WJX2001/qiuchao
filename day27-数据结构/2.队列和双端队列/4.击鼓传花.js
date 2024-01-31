function hotPotato (elementList, num) {
  const queue = []

  const res = []

  for (let i = 0; i < elementList.length; i++) {
    queue.push(elementList[i])
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift()) // 把第一个元素放到最后，再从队列中取出第一个元素
    }
    res.push(queue.shift())
  }
  return {
    eliminated: res,
    winner: queue.shift()
  }

}

const names = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
const result = hotPotato(names, 7)
for (let i = 0; i < result.eliminated.length; i++) {
  console.log(`${result.eliminated[i]}在击鼓传花游戏中被淘汰。`)
}
console.log(`胜利者：${result.winner}`)