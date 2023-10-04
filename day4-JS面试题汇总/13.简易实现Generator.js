// TODO: Generator 简易实现
// 这里因为 next 不能接收参数，还是做不到后面的thunk函数自动执行

//* 生成器函数根据 yield语句将代码分割为switch-case块，后续通过切换_context.prev 和 _context.next分别执行每个case

function gen$(_context) {
  while (1) {
    switch ((_context.prev = _context.next)) {
      case 0:
        _context.next = 2
        return 'result1'

      case 2:
        _context.next = 4
        return 'result2'

      case 4:
        _context.next = 6
        return 'result3'

      case 6:
      case 'end':
        return _context.stop()
    }
  }
}

// 低配版context
var context = {
  next: 0,
  prev: 0,
  done: false,
  stop: function stop() {
    this.done = true
  },
}

// 低配版 invoke
let gen = function () {
  return {
    next: function () {
      value = context.done ? undefined : gen$(context)
      done = context.done
      return {
        value,
        done,
      }
    },
  }
}

// 测试使用
var g = gen()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// TODO: Thunk 函数的写法
function Thunk(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}

// run 函数
function run(fn) {
  let gen = fn()

  function next(err, data) {
    let result = gen.next(data)
    if (result.done) return

    result.value(next)
  }
  next()
}
// 使用 thunk方法
const request = require('request')
const requestThunk = Thunk(request)

function* requestGen() {
  const url = 'https://www.baidu.com'

  let r1 = yield requestThunk(url)
  console.log(r1.body)

  let r2 = yield requestThunk(url)
  console.log(r2.body)

  let r3 = yield requestThunk(url)
  console.log(r3.body)
}

// 启动运行
run(requestGen)
