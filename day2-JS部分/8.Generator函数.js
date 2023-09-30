// TODO: Generator 函数特征：1、function* 2、函数体内部使用yield表达式，定义不同的内部状态

//* yield表达式是暂停执行的标记，而next方法可以恢复执行

function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

var hw = helloWorldGenerator()

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }

// TODO: yield 表达式
/**
 * 遇到yield表达式，暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值
 * 一直遇到return后面的表达式的值，作为返回的对象的value属性值
 * 如果没有return语句，返回的对象的value属性值为undefined
 */

// TODO: 与Iterator 接口的关系
//* Generator 函数就是遍历器生成函数，可以把Generator赋值给对象Symbol.iterator属性，从而具有Iterator接口

var myIterable = {}
myIterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}
;[...myIterable] // [1, 2, 3]

// TODO: for...of 循环
// 原生对象没有遍历接口，无法使用for...of循环，通过Generator函数为他加上这个接口，就可以用了
let jane = { first: 'Jane', last: 'Doe' }

function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj)

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]]
  }
}

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`)
}
// first: Jane
// last: Doe

//* 写法二
// 将Generator函数加到对象的Symbol.iterator属性上
let wjx = { name: 'wjx', age: 14 }

function* objectEntries1() {
  let propKeys = Object.keys(this)

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]]
  }
}

wjx[Symbol.iterator] = objectEntries1
for (let [key, value] of wjx) {
  console.log(`${key}: ${value}`)
}
// first: Jane
// last: Doe

var x = 1

function f(m) {
  return m * 2
}

console.log(f(x + 5))
