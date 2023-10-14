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

// TODO: promise 案例
let p = new Promise((resolve, reject) => {
  let num = Math.ceil(Math.random() * 10)
  if (num <= 5) {
    resolve(num)
  } else {
    reject('数字太大了')
  }
})

p.then((data) => console.log(data)).catch((err) => console.error(err))

// TODO: promise.race 应用场景：设置异步请求的超时时间并在超时后执行相应操作

// 创建一个用于模拟异步请求的函数
function makeAsyncRequest() {
  return new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
      // 异步请求成功的地方
      resolve('请求成功')
    }, 2000) // 模拟请求在2秒后完成
  })
}

// 创建一个Promise 来表示超时
function createTimeoutPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, timeout)
  })
}

//* 测试
const requestPromise = makeAsyncRequest()
const timeoutPromise = createTimeoutPromise(1500)

// 使用 Promise.race 来等待第一个结果
Promise.race([requestPromise, timeoutPromise])
  .then((result) => {
    // 如果请求成功，这里会被调用
    console.log(result) // 输出请求成功
  })
  .catch((error) => {
    console.log(error)
  })
