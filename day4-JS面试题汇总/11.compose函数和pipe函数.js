// TODO: Compose 函数的执行

// TODO: 给你个需求，给定一个输入值x，先给这个值加10，然后结果乘以10

//* 使用函数式编程，将复杂的几个步骤拆成几个简单的可复用的简单步骤
const add = (x) => x + 10
const multiply = (x) => x * 10

// 我们的计算改为两个函数的嵌套计算，add函数的返回值作为 multiply函数的参数
let res = multiply(add(10))
console.log(res) // 200

// 函数的嵌套执行 compose作用将嵌套执行的方法作为参数平铺，嵌套执行的时候，里面的方法从右边的方法最开始执行，往左边返回

//? 类似这种形式
// let res1 = compose(multiply, add)(10)

// TODO: reduce 函数

// 实现累加效果，接受两个参数，第一个是一个累加器方法，第二个是初始化值
// 累加器接受四个参数：第一个是上次的计算值，第二个是数组的当前值，主要用的就是这两个参数，index 和 当前迭代的数组
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
]

// preRes的初始值是传入的 [],以后会是每次迭代计算后的值
const flatArr = arr.reduce((preRes, item) => preRes.concat(item), [])

console.log(flatArr) // [ 1, 2, 3, 4, 5, 6 ]

// TODO: redueRight 函数
//* 会从左往右进行迭代，如果需要从右往左迭代
const flatArr1 = arr.reduceRight((preRes, item) => preRes.concat(item), [])
console.log(flatArr1) // [ 5, 6, 3, 4, 1, 2 ]

// TODO: 实现compose函数
const compose = function () {
  // 将接受到的参数存到一个数组 args = [multiply,add]
  const args = [].slice.apply(arguments)
  return function (x) {
    return args.reduceRight((res, cb) => cb(res), x)
  }
}

let calculate = compose(multiply, add)
let res1 = calculate(10)
console.log(res1) // 200

//* 使用 ES6写法

const compose2 =
  (...args) =>
  (x) =>
    args.reduceRight((res, cb) => cb(res), x)

// Redux的中间件就是用 compose实现的，webpack中loader加载顺序也是从右到左，也是compose实现

// TODO: pipe 函数
// pipe函数跟 compose函数的左右是一样的，也是将参数平铺，顺序从左到右，实现上只需要将reduceRight换成 reduce即可
const pipe = function () {
  const args = [].slice.apply(arguments)
  return function (x) {
    return args.reduce((res, cb) => cb(res), x)
  }
}

let calculate1 = pipe(add, multiply)
let res2 = calculate1(10)
console.log(res2) // 200

//* ES6写法

const pipe1 =
  (...args) =>
  (x) =>
    args.reduce((res, cb) => cb(res), x)
