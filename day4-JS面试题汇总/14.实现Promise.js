// TODO: 构造函数

//* 先定义三个常量表示状态
var PENDING = 'pending'
var FULFILLED = 'fulfilled'
var REJECTED = 'rejected'

// TODO: resolve 和 reject 方法
//* resolve 方法是将状态改为 fulfilled，reject 是将状态改为 rejected

// 直接写在构造函数中
function MyPromise(fn) {
  this.status = PENDING // 初始状态为pending
  this.value = null // 初始化value
  this.reason = null // 初始化reason

  // 存一下this，以便于resolve 和 reject里面访问
  var that = this

  // resolve方法参数是 value
  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED
      that.value = value
    }
  }

  // reject方法参数是reason
  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED
      that.reason = reason
    }
  }

  // TODO: 调用构造函数参数
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

// TODO: then 方法
//* then 方法可以链式调用，所以是实例方法
/**
 *
 * @param {*} onFulfilled
 * @param {*} onRejected
 * 那then方法里面应该干什么呢，其实规范也告诉我们了，先检查onFulfilled和onRejected是不是函数，
 * 如果不是函数就忽略他们，所谓“忽略”并不是什么都不干，
 * 对于onFulfilled来说“忽略”就是将value原封不动的返回，
 * 对于onRejected来说就是返回reason，onRejected因为是错误分支，我们返回reason应该throw一个Error:
 */

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // TODO: 参数检查
  // 如果onFulfilled 不是函数，给一个默认函数，返回value
  var realOnFulfilled = onFulfilled
  if (typeof realOnFulfilled !== 'function') {
    realOnFulfilled = function (value) {
      return value
    }
  }

  // 如果onRejected 不是函数，给一个默认函数，返回reason的Error
  var realOnRejected = onRejected
  if (typeof realOnRejected !== 'function') {
    realOnRejected = function (reason) {
      if (reason instanceof Error) {
        throw reason
      } else {
        throw new Error(reason)
      }
    }
  }

  // TODO: 检查promise的 status,如果是Fulfilled 就调用onFulfilled，否则调用onRejected
  if (this.status === FULFILLED) {
    onFulfilled(this.value)
  }

  if (this.status === REJECTED) {
    onRejected(this.reason)
  }
}
