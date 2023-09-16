// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2.then((result) => console.log(result)).catch((error) => console.log(error))

// getJson('/post/1.json')
//   .then((post) => getJson(post.commentURL))
//   .then((comments) => console.log('resolved:', comments))

// Promise.prototype.catch

// p.then((val) => console.log('fulfilled:', val)).catch((err) =>
//   console.log('reject', err)
// )

// // 等同于
// p.then((val) => console.log('fullfilled', val)).then(null, (err) =>
//   console.log('rejected', err)
// )

// Promise.allSettled()

// 等到参数数组的所有Promise 对象都发生状态变更 （不管fulfilled 还是 rejected）

// const promises = [fetch('/api-1'), fetch('/api-1'), fetch('/api-1')]

// await Promise.allSettled(promises)

// TODO: Promise.All 写法
Promise.MyAll = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item)
        .then((res) => {
          arr[i] = res
          count += 1
          if (count === promises.length) resolve(arr)
        })
        .catch(reject)
    })
  })
}

// TODO: Promise.race 写法
Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 遍历传入的 Promise 数组
    for (const promise of promises) {
      // 确保每个 promise 都是 Promise 对象
      Promise.resolve(promise).then(resolve, reject)
    }
  })
}

// TODO: Promise.any 写法

Promise.MyAny = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(resolve, (err) => {
        arr[i] = { status: 'rejected', val: err }
        count += 1
        if (count === promises.length) reject(new Error('没有promise成功'))
      })
    })
  })
}

// TODO: Promise.allSettled 写法
Promise.MyAllSettled = function (promises) {
  let arr = [],
    count = 0

  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(
        (res) => {
          arr[i] = { status: 'fulfilled', val: res }
          count += 1
          if (count === promises.length) resolve(arr)
        },
        (err) => {
          arr[i] = { status: 'rejected', val: err }
          count += 1
          if (count === promises) resolve(arr)
        }
      )
    })
  })
}

// TODO: Promises.allSettled 封装写法

Promise.MyAllSettledPlus = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    // 进行封装
    const processResult = (res, index, status) => {
      arr[index] = { status: status, val: res }
      count += 1
      if (count === promises.length) resolve(arr)
    }

    promises.forEach((item, i) => {
      Promise.resolve(item).then(
        (res) => {
          processResult(res, i, 'fulfilled')
        },
        (err) => {
          processResult(err, i, 'rejected')
        }
      )
    })
  })
}
