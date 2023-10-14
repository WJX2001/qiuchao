// function fn() {
//   var num = 0
//   return function () {
//     console.log(++num)
//   }
// }

// var fun = fn()
// fun()
// fun()

// TODO: 题目二
// for (var i = 0; i < 2; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0)
// }

// for (var i = 0; i < 2; i++) {
//   ;(function (i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 0)
//   })(i)
// }

// TODO: 题目三

// var uname = 'window'
// var object = {
//   uname: 'object',
//   fun: function () {
//     console.log(this.uname)
//     return function () {
//       console.log(this.uname)
//     }
//   },
// }

// object.fun()()

// TODO: 题目四

// Object.is(NaN, NaN) // true
// Object.is(+0, -0)
// ;(NaN === NaN)
// +0 === -0

// TODO: 题目五

// let arr = [2, 20, 3, 12, 9]

// var res1 = arr.filter((val1, val2) => {
//   return val1 > 10
// })
// console.log(res1)

// var res2 = arr.some((val1, val2) => {
//   return val1 > 10
// })
// console.log(res2)

// var res3 = arr.every((val1, val2) => {
//   return val1 > 10
// })
// console.log(res3)

// TODO:
// function Person(age) {
//   this.age = age
// }

// Person.sing = function () {
//   console.log('我会唱歌')
// }
// Person.prototype.getAge = function () {
//   console.log(this.age)
// }

// Person.age = 20 // 静态属性

// var p = new Person(18)
// console.log(Person.prototype.constructor)

// p.sing()
// 调用sing 可以用 p.sing()
// 若要调用 getAge 可以使用 p.getAge()

// 若要访问p的age 属性 可以使用p.age 返回结果为20

// TODO:
TODO:;
;('^abc$')
;('^[abc]$')
;('^[abc][1,2]$')
;('^[abc]{2}$')

// TODO:
// var p1 = {
//   name: '小明',
//   age: '12',
//   action: function (where, doing) {
//     console.log(this.age + '岁的' + this.name + '在' + where + doing)
//   },
// }

// var p2 = {
//   name: '小红',
//   age: '15',
// }
// console.log(p1.action.call(p2, '操场上', '运动'))

// TODO:
// let x = 10
// let foo = () => {
//   console.log(x)
//   let x = 20
//   x++
// }
// foo()

// TODO:
// function* gen() {
//   yield 1
//   yield 2
//   yield 3
// }

// gen()

// TODO: flexbox布局 不能实现以下哪个效果

// 散列布局，随哦那个气宽度等宽弹性伸缩
// 多列布局，每列的高度按内容最高的一列等高
// 三列布局，左列宽度像素数确定，中、右列随容器宽度等宽弹性伸缩
// 多个宽高不等的元素，实现无缝瀑布流布局

// TODO: 数值大于2 的key 的数组
var data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

Object.keys(data).filter(function (x) {
  return data[x] > 2
})
console.log(
  Object.keys(data).filter(function (x) {
    return data[x] > 2
  })
)

// TODO:

function showMoney() {}

var personA = new Object()
var personB = new Object()

personA.money = '100'
personB.money = '150'

personA.showMoney = showMoney
personB.showMoney = showMoney

console.log(personA.showMoney()) // 100
console.log(personB.showMoney()) // 150
