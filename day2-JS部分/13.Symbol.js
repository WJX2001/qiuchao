// TODO: Symbol类型：1、解决属性名冲突的问题 2、模拟私有属性的功能

// TODO1: 解决命名冲突问题

/**
 *  JS 内置了一个Symbol：Symbol.iterator，拥有此函数的对象被称为可迭代对象，可以在对象上使用for...of 循环
 */

//* 此时的MyClass的实例是可迭代对象，可以遍历对象上面的属性，但是上面的类有个潜在的缺陷
class MyClass {
  constructor(obj) {
    Object.assign(this, obj)
  }

  iterator() {
    const keys = Object.keys(this)
    let i = 0
    return (function* () {
      if (i >= keys.length) {
        return
      }
      yield keys[i++]
    })()
  }
}

const obj = new MyClass({ iterator: 'not a function' }) // 用户恶意数据

/**
 * 此时 传入的iterator会覆盖原类属性iterator，造成原型污染，所以需要symbol 来保证用户数据不会跟内置属性冲突
 */

// TODO: symbol 不会出现在Object.keys() 中

const symbolKey = Symbol('symbolKey')

const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  [symbolKey]: 'symbolValue',
}

console.log(Object.keys(obj1)) // [ 'prop1', 'prop2' ]
//* 除非使用 Object.getOwnPropertySymbols() 拿到，否则无法访问

// TODO: JSON.stringify()会忽略symbol属性名和属性值
