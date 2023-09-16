// // js中的 typeof类型
// console.log('==================typeof类型==================')
// console.log(typeof undefined) //undefined
// console.log(typeof 123) // number
// console.log(typeof '123') // string
// console.log(typeof true) // boolean
// console.log(typeof [1, 2, 3]) // object
// console.log(typeof { id: 11 }) // object
// console.log(typeof null) // object
// console.log(typeof console.log) // function
// // 类型转换
// console.log('==================Number类型转换==================')
// /* Number类型 */
// console.log(Number('111')) // 111
// console.log(Number('哈哈哈')) // NaN
// console.log(Number(null)) // 0
// console.log(Number('')) // 0
// console.log(Number({ a: 1 })) // NaN

// console.log('==================string类型转换==================')
// /* String类型 */
// console.log(String(true))
// console.log(String(undefined)) // undefined
// console.log(String(null)) // null

// console.log('==================boolean类型转换==================')

// console.log(1 + { a: 1 })

// let jsonString = '{"name": "John", "age": 30, "city": "New York"}'

// console.log(JSON.parse(jsonString))

let obj = { name: 'wjx', age: '123' }
console.log(JSON.stringify(obj))

// 获取一个对象的类型

// var toString = Object.prototype.toString

// console.log(toString.call(new Date())) // [object Date]
// console.log(toString.call(new String())) // [object String]
// console.log(toString.call(undefined)) // [object Undefined]

// 原型链继承

function Element(ele) {
  this.ele = document.getElementById(ele)
}

Element.prototype.html = function (val) {
  var ele = this.ele
}
