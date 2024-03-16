// TODO: 组合式继承

//TODO:  写法一：父类 实例属性放在构造函数中
function Father(name,age) {
  this.name = name
  this.age = age
}

// 父类方法放在原型上实现复用
Father.prototype.sayName = function() {
  console.log(this.name)
}

Father.prototype.x = 1

// 子类
function Child(name,age) {
  Father.call(this,name,age)
}

Child.prototype = Object.create(Father.prototype)
Child.prototype.constructor = Child // 保证实例的构造函数是自己


// 测试用例
let child = new Child('章三',18)
child.sayName() // 章三
console.log(child.x) // 1

console.log(child.__proto__.constructor)


// TODO: ES6实现继承

class Super {
  constructor(foo) {
    this.foo =foo
  }

  printFoo() {
    console.log(this.foo)
  }
  printHa(args) {
    console.log(args)
  }
}

class Sub extends Super {
  constructor(foo,bar) {
    super(foo)
    this.bar = bar
  }
}

// 测试用例
let father = new Super('hahah')
let son = new Sub('hhh','bar')

// console.log(son.printFoo())

// console.log(son.printHa('ss'))     



