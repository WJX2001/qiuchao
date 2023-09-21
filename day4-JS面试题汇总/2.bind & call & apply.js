// TODO: call apply bind 作用 是改变函数执行时的上下文，改变函数运行时的 this 指向

// 例子
// var name = 'wjx'
// var obj = {
//   name: 'xhc',
//   say: function () {
//     console.log(this.name)
//   },
// }

// obj.say() // xhc  这时的 this 指向obj对象

// // 因为 定时器中 say 方法被作为回调函数来执行，
// // 当回到主栈来执行的时候，是在全局执行上下文的环境中执行，this此时指向 window
// setTimeout(obj.say, 1) // wjx

// //? 所以我们需要手动绑定一下
// setTimeout(() => {
//   obj.say.bind(obj)
// }, 0)

// TODO: apply 方法

/**
 * 接受两个参数 一个参数是this指向，第二个参数是函数接受的参数，以数组的形式传入
 * 改变 this之后立即执行，且此方法只是临时改变 this 指向一次
 * 第一个参数为 null、undefined 的时候，默认指向 window
 * @param  {...any} args
 */

// function fn(...args) {
//   console.log(this, args)
// }
// let obj = {
//   myname: '张三',
// }

// fn.apply(obj, [1, 2]) // this会变成传入的obj，传入的参数必须是一个数组；
// fn(1, 2) // this指向window

// TODO: call 方法

/**
 * call 方法第一个参数也是 this 指向
 * 第一个参数为 null、undefined 的时候，默认指向 window
 */

// function fn(...args) {
//   console.log(this, args)
// }
// let obj2 = {
//   myname: '张三',
// }

// fn.call(obj2, 1, 2) // this会变成传入的obj，传入的参数必须是一个数组；
// fn(1, 2) // this指向window

// TODO: bind 方法

/**
 * 第一参数 也是 this 的指向，后面传入的也是一个参数列表（但是这个参数列表可以分多次传入）
 * 改变 this指向之后不会立即执行，而是返回一个永久改变 this指向的函数
 */

// function fn(...args) {
//   console.log(this, args)
// }
// let obj = {
//   myname: '张三',
// }

// const bindFn = fn.bind(obj) // this 也会变成传入的obj ，bind不是立即执行需要执行一次
// bindFn(1, 2) // this指向obj
// fn(1, 2) // this指向window

// 样例函数
let Name = {
  name: '大眼睛图图',
  say() {
    console.log(this, 'this')
    console.log(`我叫${this.name}`)
  },
}

let Name1 = {
  name: '大耳朵图图',
}

// TODO: 手撕call

//? 1、将调用它的函数立即执行
//? 2、改变其 this 指向

Function.prototype.Mycall = function (context) {
  // context 是 Name1 传入的对象
  context.say = this // this 执行调用 Mycall的 say()函数
  context.say() // 执行 context.say() 方法
}

Name.say.Mycall(Name1)

//! call 函数细节注意
/**
 * call 没有指定参数，call 中的this 会指向 window
 * call 中增加的 say 方法 可能会被改写
 * call 中增加 say 方法 会增加原先 call 函数中的属性，改变call 函数的结构
 * call 函数可以传入多个参数
 */

Function.prototype.MyCall = function (context, ...arg) {
  // 如果MyCall 没有传入参数， context 就是 window
  // context 是 Name1 传入的对象
  context = context || window
  // 用 Symbol 来创建唯一的fn 不被之前的变量污染
  let fn = Symbol()
  context[fn] = this
  // 传入MyCall 的多个参数
  const result = context[fn](...arg)
  // 及时将增加的fn 删除
  delete context[fn]
  return result // 及时将 结果返回
}

// TODO: 手撕 bind

//? 首先实现两个 功能： 1、改变this执行 2、函数 say 不会立即执行

// Function.prototype.myBind = function (context, ...args) {
//   let fn = Symbol('fn')
//   fn = this // this 指向调用它的函数

//   // 返回Fn 函数，等待下次调用Fn 的时候才会调用fn 函数
//   return function Fn() {
//     return fn.apply(context, args.concat(arguments))
//   }
// }

//! bind 还有一个特点 一个绑定函数也能使用 new操作符创建对象，这种行为相当于把烟函数当成构造器
//! 提供的 this 值被忽略，同时调用时的参数被提供给模拟函数

// 例子如下
function bar() {
  this.habit = 'shopping'
}

var bindFoo = bar.bind()
var obj = new bindFoo()

console.log(obj.habit) // shopping

Function.prototype.myBind = function (context, ...args) {
  let fn = Symbol('fn')
  fn = this // this 指向调用它的函数

  // 返回Fn 函数，等待下次调用Fn 的时候才会调用fn 函数
  return function Fn() {
    if (this instanceof Fn) {
      return new fn(...args, ...arguments)
    }
    return fn.apply(context, args.concat(arguments))
  }
}
