// TODO: 函数即对象

function Person () {

}

// 上面是普通函数声明方法 生成具名函数 在声明时就已经生成对象模型

console.log(Person.constructor) // [Function: Function]

console.log(Function.constructor) // [Function: Function]
console.log(Object.constructor) // [Function: Function]


/*
  1、Function函数是Person函数[普通声明的函数]的构造函数
  2、Function函数同时是自己的构造函数
  3、Function函数同样是Object这类内置对象的构造函数
  4、在JS里，函数就是Function函数的实例对象，也就是我们说的函数即对象
*/

// TODO: constructor  就是一个保存自己构造函数引用的属性

/* 
  1、person1和person2是Person对象的实例，他们的constructor指向创建他们的构造函数 -- Person函数
  2、Person是函数，但同时也是Function实例对象 constructor ---> Function
  3、Function函数，它是JS的内置对象，它的构造函数是他自身 constructor ---> 自己 
*/


// TODO: prototype 用于放同一类实例的共享属性和方法，实质为了内存着想

// 给实例添加一个方法
let person1 = new Person()
let person2 = new Person()

// person1.sayHello = function () {
//   console.log('hello')
// }

// person2.sayHello = function () {
//   console.log('hello')
// }

/* 
   1、这两个方法，只是看着像，本质上确实各自占用了部分内存的不同方法
   2、如果千万个实例要这样的方法 内存会吃不消，这时 prototype就起了作用
   3、要为大量实例添加相同效果的方法时，可以将他们存放在prototype对象中，并将prototype对象放在这些实例的构造函数上，达到共享效果
*/

Person.prototype.sayHello = function () {
  console.log('hello')
}

// person1.sayHello === person2.sayHello 这时为true


// TODO: 真正的constructor属性藏在哪: 默认constructor实际上是被当作共享属性放在他们的原型对象中

/* 
  问题：
    - 如果是共享属性，那将两个实例其中一个属性改了，第一个实例变不变
*/

function PersonCommon () {

}
let personPart1 = new PersonCommon()
let personPart2 = new PersonCommon()

console.log(personPart1.constructor) // [Function: PersonCommon]
console.log(personPart2.constructor) // [Function: PersonCommon]

// 这时修改其中一个constructor
personPart1.constructor = Function

// 其实改的不是原型对象上的共享属性 constructor 而是给实例person1加了一个constructor属性

console.log(personPart1) // PersonCommon { constructor: [Function: Function] }



// TODO: __proto__让实例能找到自己的原型对象

/*
  1、我们如果想解决这个问题，想到在对象内部创建一个属性直接指向自己的原型对象，那就可以找到共享属性constructor了
  2、实例对象.__proto__ = 创建自己的构造函数内部的prototype（原型对象）
  3、实例对象.__proto__.constructor = 创建自己的构造函数
  4、对象的__proto__属性就是指向自己的原型对象，JS内所有函数都是Function函数的实例对象
  5、Function有个__proto__属性指向自己
*/

/* 
  实例对象.constructor 等于实例对象.__proto__.constructor?
    - 当在一个实例对象上找不到某个属性时，JS就会去它的原型对象上找是否有相关的共享属性和方法，涉及原型链
*/

/* 
  prototype 也是个对象，它也有个__proto__ 指向自己的原型对象
*/

function Person2 () { }
let res = Person2.prototype.__proto__.constructor
console.log(res) // [Function: Object]



// TODO: 手写一个new

/* 
  1、让一个对象承认自己的构造函数就是该构造函数
  2、让这个构造函数承认这个对象就是它自己的实例
*/


// 1、先造个Person构造函数

function Father (identify) {
  this.identify = identify || 'Person'
}

// 2、创建一个儿子
var obj = {}

// 3、手动将实例中的__proto__ 属性指向相应原型对象
obj.__proto__ = Father.prototype

// 4、在实例的执行环境内调用构造函数 添加构造函数设置的私有属性/方法

/*
    - 认爹结束 让爹认儿子 如果Father函数内部没有设置 this.identify = identify || 'Person' （设置私有属性/方法） 也就成功了
    - 但是Father设置了私有属性/方法：你要成为儿子 需要拥有我的私有属性 认了你之后，改不改随便
    - TODO: 构造函数：是一种特殊的方法，主要用来创建对象时初始化对象，即为对象成员变量赋初始值
*/

//? 这里举个例子：
// console.log(Father.identify) // undefined

/**
 *  这是因为函数声明后函数体内的语句并不会立即执行，而是在真正调用时才执行 所以里面的this在没有调用的时候压根没指向
 *  所以根本没有被当成属性，只是个代码段，自然也不不会立即给自己赋值identity属性
 *  所以我们需要让实例使用apply方法调用构造函数 让构造函数体内真实存在的this指向自己 并为自己赋相应的初始属性值
 *  Father.apply(obj,arguments)   // arguments就是相应的参数 用于调整初始值如何设置的参数
 */



// TODO: 完整流程
// 构造函数登场
function Person3 (identify) {
  this.identify = identify || 'Person'
}

// 实例对象登场
var obj3 = {}

// 环节一：让obj 承认自己的构造函数（爹）就是Person函数
obj3.__proto__ = Person3.prototype

// 环节二：obj调用Person 拥有Person给孩子们设置的属性/方法
// 让Person函数承认这个对象就是它自己的实例

Person3.apply(obj3, ['son'])
console.log(Person3.apply(obj3, ['son']))
console.log(obj3.constructor) // [Function: Person3]
console.log(obj3.identify) // son


// TODO: 需要判断特殊情况： 构造函数中的返回值是什么类型，如果是原始类型则没用 如果返回一个对象，那么这个返回值会被正常使用

function Test (name) {
  this.name = name
  return { age: 36 }
}
const t = new Test('张三')
console.log(t, '章三')

// TODO: 完整代码

function myNew (func, ...args) {
  const obj = {}
  // 认爹
  obj.__proto__ = func.prototype
  // 认儿子
  let res = func.apply(obj, args)

  return res instanceof Object ? res : obj
}








