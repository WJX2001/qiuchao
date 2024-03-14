// TODO: 如何拦截构造函数调用 （拦截new调用）

// 拦截构造函数

/**
 *  new.target是ES6中引入的属性 用于检测函数或者 构造函数是否通过new 关键字调用
 *      - 如果是通过new 调用的 new.target就是被调用的函数或构造函数 
 *      - 否则就是undefined
 *      
 */


function Person (name) {
  if (new.target === Person) {
    this.name = name
  } else {
    throw new Error('必须使用 new生成实例')
  }
}

// 尝试使用 Function.prototype.call() 方法以 person 作为上下文来调用 Person 函数。
// 由于没有使用 new 关键字，因此会抛出错误，提示必须使用 new 命令生成实例。

var person = new Person('章三')
var notPerson = Person.call(person, '章四') // 报错


