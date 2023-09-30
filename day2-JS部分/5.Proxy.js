// const obj = new Proxy(
//   {},
//   {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`)
//       console.log(target, '这是target')
//       return Reflect.get(target, propKey, receiver)
//     },

//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`)
//       return Reflect.set(target, propKey, value, receiver)
//     },
//   }
// )

// obj.count = 1
// ++obj.count
// ++obj.count

// console.log(obj.count)

// var proxy1 = new Proxy(
//   {},
//   {
//     get: function (target, propKey) {
//       return 35
//     },
//   }
// )

// let obj1 = Object.create(proxy1)

// console.log(obj1.time)

// 实现 数组读取负数的索引

// const createArray = (...element) => {
//   let handler = {
//     get(target, propKey, receiver) {
//       console.log(target, '这是target')
//       let index = Number(propKey)
//       if (index < 0) {
//         propKey = String(target.length + index)
//       }
//       return Reflect.get(target, propKey, receiver)
//     },
//   }

//   let target = []
//   target.push(...element)

//   return new Proxy(target, handler)
// }

// let arr = createArray('a', 'b', 'c')

// // console.log(arr[-1])
// const handler = {
//   set: function (obj, prop, value, receiver) {
//     console.log(receiver, '这是 receiver')
//     obj[prop] = receiver
//     console.log(receiver, '这是 receiver')
//     return true
//   },
// }
// const proxy = new Proxy({}, handler)
// const myObj = {}
// Object.setPrototypeOf(myObj, proxy)

// myObj.foo = 'bar'
// console.log(myObj.foo === myObj) // true

// TODO: Proxy的作用：

/**
 * 1、拦截和监视外部对对象的访问
 * 2、降低函数或类的复杂度
 * 3、在复杂操作前对操作进行校验或对所需资源进行管理
 */

// TODO: 实现私有变量

var target = {
  name: 'wjx',
  _age: 22,
}

var logHandler = {
  get: function (target, key) {
    if (key.startsWith('_')) {
      console.log('私有变量age不能被访问')
      return false
    }
    return target[key]
  },
  set: function (target, key, value) {
    if (key.startsWith('_')) {
      console.log('私有变量age不能被修改')
      return false
    }
    target[key] = value
  },
}

// 测试
var targetWithLog = new Proxy(target, logHandler)

// 私有变量不能被访问
console.log(targetWithLog.name) // wjx
targetWithLog._age // 私有变量age不能被访问

// 私有变量不能被修改
targetWithLog._age = 15 // 私有变量age不能被修改

// TODO: 预警拦截
//* 假设你不想让其他开发者删除 noDelete 属性，还想让调用 oldMethod 的开发者了解到这个方法已经被废弃了，
//* 或者告诉开发者不要修改 doNotChange 属性，那么就可以使用 Proxy 来实现。

let dataStore = {
  noDelete: 1235,
  oldMethod: function () {
    /*...*/
  },
  doNotChange: 'tried and true',
}

const NODELETE = ['noDelete']
const NOCHANGE = ['doNotChange']
const DEPRECATED = ['oldMethod']

dataStore = new Proxy(dataStore, {
  set(target, value, proxy) {
    if (NOCHANGE.includes(key)) {
    }
  },
})
