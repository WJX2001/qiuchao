// TODO: typeof实现原理

/*
  typeof 一般用于判断一个变量的类型，判断七种类型：
    - number
    - string
    - object
    - boolean
    - function
    - undefined
    - symbol
*/

/**
 * 判断非object类型的数据的时候 typeof能比较清楚告诉我们具体类型
 *  - 但是在判断一个object的数据的时候只能告诉我们是object 不能细致判断
 *  - typeof  不存在的变量: undefined
 *  - typeof  对象：object
 *  - typeof  null: object
 *  - typeof  数组： object
 *  - typeof  方法的实例（new Array()） object
 */

// TODO: 重要概念：JS在底层如何存储数据类型信息

/**
 * JS在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
 *    - 000：对象
 *    - 010：浮点数
 *    - 100：字符串
 *    - 110：布尔
 *    - 1： 整数
 * 
 *  TODO: 这里 undefined和 null 特殊
 *    - null: 所有的机器码为0
 *    - undefined: 用 -2^30整数来表示
 *    - 所以当typeof null 的时候，由于null机器码也是0，所以被当作对象处理 
 *    - 这里如果使用instanceof 判断 null  
 *       -  null instanceof null // TypeError: Right-hand side of 'instanceof' is not an object
 *    
 *  */

Object.prototype.toString.call(1) // "[object Number]"

Object.prototype.toString.call('hi') // "[object String]"

Object.prototype.toString.call({ a: 'hi' }) // "[object Object]"

Object.prototype.toString.call([1, 'a']) // "[object Array]"

Object.prototype.toString.call(true) // "[object Boolean]"

Object.prototype.toString.call(() => { }) // "[object Function]"

Object.prototype.toString.call(null) // "[object Null]"

Object.prototype.toString.call(undefined) // "[object Undefined]"

Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"

/**
 * TODO: instanceof 用法：
 *    - 判断一个实例是否属于某种类型
 *    - 判断构造函数的prototype 属性是否出现在对象的原型链中的任何位置
 */


// 用法一：判断一个实例是否属于某种类型
let person = function () {

}
let nicole = new person()

nicole instanceof person // true

// 用法二：判断一个实例是否是其父类型或者祖先类型的实例

let person1 = function () {

}

let programmer = function () {

}
programmer.prototype = new person1()

let wjx = new programmer()
wjx instanceof person1 // true
wjx instanceof programmer // true

// TODO: 实现一段instance 代码

function new_instance_of (leftValue, rightValue) {
  let rightProto = rightValue.prototype   // 取右表达式的 prototype 值
  leftValue = leftValue.__proto__   // 取左表达式的__proto__ 值

  while (true) {
    if (leftValue === null) {
      return false
    }

    if (leftValue === rightProto) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}

// 只要右边变量的 prototype 在左边变量的原型链上即可,instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype



