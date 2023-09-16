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

const p = new Proxy(function () {}, {
  construct: function (target, args) {
    console.log('called: ' + args.join(', '))
    return { value: args[0] * 10 }
  },
})

console.log(new p(1).value)
