// TODO: 扩展运算符

//* 好比 rest 参数的逆运算，将一个数组转为用逗号分隔符分隔的参数序列

//* 主要用于函数调用
function add(x, y) {
  return x + y
}

const numbers = [4, 38]
console.log(add(...numbers)) // 42

// TODO: 替代函数的apply 方法
//* 由于扩展运算符可以展开数组，所以不再需要apply() 方法将数组转为函数的参数

// ES5写法
function f(x, y, z) {
  return x + y + z
}

var args = [0, 1, 2]
f.apply(null, args) // 3

// ES6 写法
f(...args)

// TODO: push 案例

// ES5 写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

Array.prototype.push.apply(arr1, arr2)

// ES6 写法
arr1.push(...arr2)

// TODO: 实现了 Iterator 接口的对象
//* 定义了 Number对象的遍历器接口，扩展运算符将 5 自动转为 Number实例以后，调用这个接口，返回自定义的结果
Number.prototype[Symbol.iterator] = function* () {
  let i = 0
  let num = this.valueOf()
  while (i < num) {
    yield i++
  }
}

console.log([...5])

//! 如果没有部署Iterator接口的类似数组的对象，扩展运算符无法将其转为真正的数组
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
}

console.log(Array.from(arrayLike)) // [ 'a', 'b', 'c' ]

// TODO: Map 和 Set 结构，Generator 函数
//* 扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符,比如Map结构
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let arr = [...map.keys()] // [1, 2, 3]

//* Generator 函数运行后，返回一个遍历器对象，也可以使用扩展运算符

let go = function* () {
  yield 1
  yield 2
  yield 3
}

// [...go()] // [1, 2, 3]

// TODO: Array.from
//* 该方法用于将两类对象转为真正的数组：1、类似数组的对象 2、可遍历(iterable)的对象 (包括Set Map)

let arrayLike1 = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
}

// ES5 写法
var arr1 = [].slice.call(arrayLike1) // ['a', 'b', 'c']
// ES6 写法
var arr2 = Array.from(arrayLike1) // ['a', 'b', 'c']

//! 只要是部署了 Iterator 接口的数据结构，Array.from() 都能将其转为数组
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']

//! 任何有length属性 都可以通过 Array.from 转为数组，而扩展运算符不行

// TODO: Array.from() 还可以接受一个函数作为第二个参数，作用类似于数组的map()

Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]

// TODO: Array.of
//* 用于将一组值 转换为数组

Array.of(3, 11, 8) // [3, 11, 8]

// 使用ES5 写法

function ArrayOf() {
  return [].slice.call(arguments)
}

// TODO: find 方法
//* 用于找出第一个符合条件的数组成员，他的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员

;[1, 4, -5, 6].find((item) => item < 0) // -5

// 可以有三个参数：当前的值 当前的位置 原数组
console.log([1, 5, 10, 11].find((value, index, arr) => value > 9)) //

// TODO: findIndex()
//* 返回第一个符合条件的数组成员的位置，如果都不符合条件，返回-1

//* find 和 findindex 都可以接受第二个参数，用来绑定回调函数的this对象

function f(v) {
  return v > this.age
}
let person = { name: 'John', age: 20 }
;[(10, 12, 26, 15)]
  .find(f, person) // 26

  // TODO: 弥补 indexOf 针对 NaN 无法识别的不足
  [NaN].indexOf(NaN)
  // 借助 Object.is
  [NaN].findIndex((y) => Object.is(NaN, y))
// 0
