// 实例代码
// function* helloworldGenerator() {
//   yield 'hello'
//   yield 'world'
//   return 'ending'
// }

// let hw = helloworldGenerator()

// console.log(hw.next())

// function* gen() {
//   yield 123 + 456
// }

// const a = gen()
// console.log(a.next())

//  yield 表达式只能用在 Generator 函数里面，用在其他地方都会报错
// var arr = [1, [[2, 3], 4], [5, 6]]

// let flat = function* (a) {
//   var length = a.length

//   for (var i = 0; i < length; i++) {
//     var item = a[i]
//     if (typeof item !== 'number') {
//       yield* flat(item)
//     } else {
//       yield item
//     }
//   }
// }

// for (var f of flat(arr)) {
//   console.log(f)
// }

// const myIterable = {}

// myIterable[Symbol.iterator] = function* () {
//   yield 1
//   yield 2
//   yield 3
// }

// console.log([...myIterable])

// function* gen() {}

// var g = gen()

// function* foo(x) {
//   var y = 2 * (yield x + 1)
//   var z = yield y / 3
//   return x + y + z
// }

// var a = foo(5)

// console.log(a.next())
// console.log(a.next(12))
// console.log(a.next(13))
// console.log(a.next(1))

// TODO: 第一次调用 next 方法时，就能够输入值，可以在Generator函数外面再包一层
// function wrapper(generatorFunction) {
//   return function (...args) {
//     let generatorObject = generatorFunction(...args)
//     generatorObject.next()
//     return generatorObject
//   }
// }

// const wrapped = wrapper(function* () {
//   console.log(`First input: ${yield}`)
//   return 'DONE'
// })

// console.log(wrapped().next(111))

// TODO: 利用Generator 函数 和 for...of 循环
// function* fib() {
//   let [prev, cur] = [0, 1]
//   for (;;) {
//     yield cur
//     ;[prev, cur] = [cur, prev + cur]
//   }
// }

// for (let n of fib()) {
// }
// 利用 for...of 循环 可以写出遍历任意对象

// TODO: 加遍历器接口写法一：原生 JS 对象没有遍历接口，无法使用 for...of 循环，通过Generator函数为它加上这个接口

// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj)

//   for (let propKey of propKeys) {
//     yield [propKey, obj[propKey]]
//   }
// }

// let jane = { first: 'Jane', last: 'Doe' }

// for (let [key, value] of objectEntries(jane)) {
//   console.log(`${key}: ${value}`)
// }

// TODO: 加遍历器接口写法二：将Generator函数加到对象的Symbol.iterator属性上面

// function* objectEntries2() {
//   let propKeys = Object.keys(this)

//   for (let propKey of propKeys) {
//     yield [propKey, this[propKey]]
//   }
// }
// let jane = { first: 'Jane', last: 'Doe' }

// jane[Symbol.iterator] = objectEntries2

// for (let [key, value] of jane) {
//   console.log(`${key}: ${value}`)
// }

// TODO: Generator.proptotype.return()

// 可以返回给定的值，终结遍历Generator函数

// function* gen() {
//   yield 1
//   yield 2
//   yield 3
// }

// var g = gen()

// console.log(g.next()) // { value: 1, done: false }
// console.log(g.return('foo')) // { value: 'foo', done: true }
// console.log(g.next()) // { value: undefined, done: true }

// TODO: yield* 后main的Generator 函数（没有 return语句），是 for..of缩写

// function* gen() {
//   yield* ['a', 'b', 'c']
// }

// console.log(gen().next()) // a   如果yield后面没有* 则会返回整个数组

// TODO: yield* 命令可以取出嵌套数组的所有成员
// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for (let i = 0; i < tree.length; i++) {
//       yield* iterTree(tree[i])
//     }
//   } else {
//     yield tree
//   }
// }

// const tree = ['a', ['b', ['c', 'f', ['h', 'g']]], ['d', 'e']]
// console.log(tree.flat())

// console.log([...iterTree(tree)])
// TODO: 使用 ES6 flat方法 递归实现扁平化
// const flatTree = tree.flat(Infinity)

// for (let x of flatTree) {
//   console.log(x)
// }

//TODO: 使用 yield* 语句遍历完全二叉树

// 二叉树的构造函数 参数：左树、当前节点、右树

function Tree(left, label, right) {
  this.left = left
  this.label = label
  this.right = right
}

// 中序遍历函数
// 返回的是一个遍历器，所以要用 generator函数
// 函数体内采用递归算法，左树和右树要用 yield* 遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left)
    yield t.label
    yield* inorder(t.right)
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否是叶节点
  if (array.length === 1) return new Tree(null, array[0], null)
  return new Tree(make(array[0]), array[1], make(array[2]))
}

let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]])
var result = []
for (let node of inorder(tree)) {
  result.push(node)
}

console.log(result)
