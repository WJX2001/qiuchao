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
*/


