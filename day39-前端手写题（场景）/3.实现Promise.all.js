// TODO: 实现Promise.all

function pAll(_promises) {
  return new Promise((resolve,reject) => {
    const promises = Array.from(_promises)
    // 结果用一个数组维护
    const r = []
    const len = promises.length
    let count = 0
    for(let i=0;i<len;i++) {
      Promise.resolve(promises[i]).then(res => {
        count++
        r[i] = res

        if(count === len) {
          resolve(r)
        }
      }).catch(e => reject(e))
    }
  })
}

// 进行测试
const sleep = (s) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('sleep')
    },s)
  })
}