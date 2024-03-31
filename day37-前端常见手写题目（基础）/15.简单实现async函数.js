// TODO: 实现一个generator函数+执行器的语法糖

function getNum (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1)
    }, 1000)
  })
}

// TODO: 实现一个自动执行器，如果一个Generator没有执行完，则递归调用

function asyncFun (func) {
  var gen = func()

  function next (data) {
    let result = gen.next(data)
    if (result.done) return result.value
    result.value.then(function (data) {
      next(data)
    })
  }
  next()
}


// TODO: 测试一下
var func = function* () {
  var f1 = yield getNum(1)
  var f2 = yield getNum(f1)
  console.log(f2)
}
asyncFun(func)
