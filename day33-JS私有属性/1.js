// TODO: 类的私有属性，内部方法能访问，类外不能访问

class Wang {
  constructor() {
    this._name = 'wjx'
    this._age = 20
    this.friend = ':ylh'
  }

  hello () {
    return 'I am ' + this._name + ',' + this._age + ' years old'
  }
}

const wjx = new Wang()

// console.log(wjx.hello()) // I am wjx, 20 years old


// TODO: 基于Proxy 实现 如果是下划线_开头 就不让访问，否则就可以访问

// Proxy 可以定义目标对象的get、set、Object.keys的逻辑 可以在这一层做一下判断 如果是下划线_开头就不让访问，否则可以访问

// 拦截函数
const handler = {
  get (target, prop) {
    if (prop.startsWith('_')) {
      return
    }

    if (typeof target[prop] === 'function') {
      return target[prop].bind(target)
    }

    return target[prop]
  },
  set (target, prop, value) {
    if (prop.startsWith('_')) {
      return
    }
    target[prop] = value
  },
  ownKeys (target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
}

// 正式测试
const proxy = new Proxy(wjx, handler)



for (const key of Object.keys(proxy)) {
  console.log(key, proxy[key])
}

// 这里由于proxy.hello 方法的this也是指向proxy的 也会收到限制 所以在 get的时候要改拜年this指向
console.log(proxy.hello())

// TODO: 基于Symbol实现 因为拿不到属性名字 所以私有

// Symbol 用于创建唯一的值，基于唯一的值的特性，可以实现私有属性

const nameSymbol = Symbol('name')
const ageSymbol = Symbol('age')

class Dong {
  constructor() {
    this[nameSymbol] = 'dong'
    this[ageSymbol] = 20
  }

  hello () {
    return 'I\'m ' + this[nameSymbol] + ', ' + this[ageSymbol] + ' years old'
  }
  // 暴露出去
  getData () {
    return this[nameSymbol]
  }
}

const dong = new Dong()
console.log(dong.getData())

// Symbol生成唯一的值来作为名字 外面拿不到属性名 就没法取到对应的属性值


//! 这种方法的缺陷：可以通过Object.getOwnPropertySymbols 获取对象的所有Symbols属性

const [s1, s2] = Object.getOwnPropertySymbols(dong)
console.log(dong[s1], dong[s2])

// 所以这种方式只是Object.keys娶不到对应的属性而已 不如Proxy那种完善


// TODO: 使用Map实现

class E {
  constructor() {
    this.map = new Map()
    this.map.set(this, { 'A': 1 })
  }

  getA () {
    return this.map.get(this)['A']
  }
}

let e = new E()









