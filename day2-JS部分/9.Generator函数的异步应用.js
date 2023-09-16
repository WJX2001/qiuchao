// TODO: Thunk 函数可以自动执行 Generator函数

// run 函数式一个Generator函数的自动执行器 内部的 next 函数就是Thunk的回调函数
// function run(fn) {
//   var gen = fn()

//   function next(err, data) {
//     var result = gen.next(data)
//     if (result.done) return
//     result.value(next)
//   }

//   next()
// }

// function* g() {
//   //
// }

// run(g)

// var g = gen()

// var r1 = g.next()
// r1.value(function (err, data) {
//   if (err) throw err
//   var r2 = g.next(data)
//   r2.value(function (err, data) {
//     if (err) throw err
//     g.next(data)
//   })
// })
async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了')
  })
}

f()
  .then((v) => console.log(v))
  .catch((e) => console.log(e))
// Error：出错了
