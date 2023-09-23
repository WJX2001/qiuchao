// TODO: Generator基本用法

//* Generator：生成器，一个函数如果加了*，他就变成了一个生成器函数，他的运行结果会返回一个迭代器对象
//! 在Generator 函数中，每次遇到 yield关键词就会暂停执行，当调用迭代器的 next时，会将yield后面表达式的值作为返回对象的value
// gen是一个生成器函数

// function* gen() {
//   let a = yield 1
//   let b = yield a + 2
//   yield b + 3
// }

// let itor = gen() // 生成器函数运行后会返回一个迭代器对象，即itor

// TODO: next

//* ES6 规定迭代器必须有一个 next方法，这个方法会返回一个对象，对象具有 done和value属性
//* {value: x,done: true} done 表示当前迭代器内容是否已经执行完，执行完为 true,value表示当前步骤返回的值

// console.log(itor.next()) // 第一次调用，返回的是 yield后面表达式的值 也就是1

/**
 * 这时，整个迭代器目前暂停在第一个 yield这里，给变量a赋值没有执行，要调用下一个 next的时候,才会给a赋值
 *
 * */
// console.log(itor.next(4)) // { value: 6, done: false } 将4 作为a参数的值传入 +2
// console.log(itor.next()) // { value: NaN, done: false } 此处没有传值，所以为 NaN
// console.log(itor.next()) // { value: undefined, done: true }

// TODO: throw
//* 迭代器可以在函数体外部抛出错误，然后在函数里面捕获
// function* gen1() {
//   try {
//     let a = yield 1
//     let b = yield a + 2
//     yield b + 3
//   } catch (e) {
//     console.log(e)
//   }
// }

// let itor1 = gen1()
// itor1.next()
// itor1.throw('test error')

// TODO: return
//* return 方法 直接终止当前迭代器，将 done设置为 true，这个方法的参数就是迭代器的value
function* gen() {
  let a = yield 1
  let b = yield a + 2
  yield b + 3
}

let itor = gen()

console.log(itor.return('456')) // { value: '456', done: true }

// TODO: yield*
//* yield* 就是在生成器里面调用另一个生成器，但是他并不会占用一个 next，而是直接进入被调用的生成器去执行
