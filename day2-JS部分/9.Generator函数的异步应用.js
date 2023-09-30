// TODO: Thunk 函数

/**
 * Thunk函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数
 */

//? 正常版本的readFile（多参数版本）

// fs.readFile(fileName, callback)

//? Thunk版本的readFile（单参数版本）
// var Thunk = function (fileName) {
//   return function (callback) {
//     return fs.readFile(fileName, callback)
//   }
// }

// var readFileThunk = Thunk(fileName)
// readFileThunk(callback)

//* 有点类似函数柯里化

// TODO: Thunk函数的实现
//* 任何函数，只要参数有回调函数，就能写成Thunk函数的形式

const myThunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}

// TODO: Thunk 函数的自动流程管理
function run(fn) {
  var gen = fn()

  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(next)
  }
  next()
}
function* g() {}
run(g)

// TODO: 基于Promise的 自动执行函数
function run1(fn) {
  var gen = fn()

  function next(data) {
    var result = gen.next(data)
    if (result.done) return result.value
    result.value.then(function (data) {
      next(data)
    })
  }
  next()
}
run(gen)
