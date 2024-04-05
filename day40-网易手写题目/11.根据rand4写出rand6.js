// TODO: 一个random能生成[0-4]的随机数，如何等概率的生成[0-6]的随机数

/**
 * TODO: 实现思路： 
 *    
 */

function random4() {
  return Math.floor(Math.random() *4)
}


function random6() {
  let res = 0

  while(true) {
    res = random4() * 5 + random4()
    if(res > 20) {
      continue
    }
    break
  }
  return res % 7
}

// for (let i = 0; i < 10000; i++) {
//   console.log(random6());
// }

