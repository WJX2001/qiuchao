// var x = 1
// function foo(
//   x,
//   y = function () {
//     x = 2
//   }
// ) {
//   var x = 3
//   y()
//   console.log(x)
// }

// foo()

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// var person1 = new Person('John', 30)

// console.log(person1)
// console.log(Object.getPrototypeOf(person1))

// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id)
//   }, 100)
// }

// var id = 21

// console.log(foo.call({ id: 42 }))

// function foo() {
//   setTimeout(() => {
//     console.log('args:', arguments)
//   }, 100)
// }

// foo(2, 4, 6, 8)

// 斐波那契

// function Fibo(n) {
//   if (n <= 1) {
//     return 1
//   }
//   return Fibo(n - 1) + Fibo(n - 2)
// }

// function Fibo2(n, ac1 = 1, ac2 = 1) {
//   if (n <= 1) {
//     return ac2
//   }

//   return Fibo2(n - 1, ac2, ac1 + ac2)
// }

// 原型链继承

function Animal(name) {
  this.name = name
}

Animal.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`)
}

// 创建子类构造函数

function Dog(name, breed) {
  // 使用 call 方法来调用父类的构造函数
  Animal.call(this, name)
  this.breed = breed
}

// 使用原型链继承
Dog.prototype = Object.create(Animal.prototype)

// 为子类添加方法
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`)
}

var myDog = new Dog('Buddy', 'hhhh')

myDog.sayHello()
myDog.bark()
