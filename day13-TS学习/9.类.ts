// TODO: ES6中类的用法

// * 属性和方法

class Animal {
  name
  constructor(name) {
    this.name = name
  }

  sayHi() {
    return `My name is ${this.name}`
  }
}

// * 类的继承

// 使用extends 关键字实现继承，子类中使用super关键字来调用父类的构造函数和方法

class Cat extends Animal {
  constructor(name) {
    super(name) // 调用父类的 constructor(name)
    console.log(this.name)
  }

  sayHi() {
    return 'Meow,' + super.sayHi() // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom') // Tom
console.log(c.sayHi()) // Meow, My name is Tom

// TODO: 存取器

// 使用 getter 和 setter 可以改变属性的赋值和读取行为

class Animal1 {
  name
  constructor(name) {
    this.name = name
  }
}
