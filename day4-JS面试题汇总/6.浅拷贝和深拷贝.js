// TODO: JS 两种数据类型： 值类型 和 引用类型

// 值类型

// let a = 1
// let b = a

// b = 10

// console.log(a, b) // 1 10

// // 如果 a 是个对象 会出现问题
// let c = { value: 1 }
// let d = c

// d.value = 10

// // 浅拷贝导致 因为对象是引用类型，在把变量c赋值给变量d的时候，赋值过去的是c的引用地址，所以c和d 有相同的引用地址
// console.log(c.value, d.value) // 10 10

// TODO: 浅拷贝

// 将target 拷贝
let target = {
  name: 'John',
  age: 20,
  friend: {
    name: 'Michel',
    age: 30,
  },
}

// 直接遍历 target对象，将它赋值给一个新对象

const shallowCopy = (obj) => {
  // 判断参数是数组还是对象
  const result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    // 使用 hasOwnProperty 来判断是否是自身属性
    // 只拷贝自身属性，不拷贝 原型链上的属性，即继承属性

    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
  }
  return result
}

let newObj = shallowCopy(target)

newObj.age = 50

// 此时原对象的属性并没有变化，因为都是值类型
// console.log(target.age, newObj.age) // 20 50

// 这时如果操作其中的对象 friend

newObj.friend.age = 50

// 这是因为 拷贝的时候拷贝的是他的引用地址，所以一同修改
// console.log(target.friend.age, newObj.friend.age) // 50 50

// TODO: 其余原生浅拷贝: Object.assign 和 ...扩展符

// let newObj1 = Object.assign({}, target) // 这是一层浅拷贝
// let newObj2 = { ...target }

// TODO: 深拷贝

// TODO: JSON 方法
/**
 * 使用 JSON.stringfy先将对象转为字符串，然后再用 JSON.parse 重新解析为JSON，这样新生成的对象与原对象没有关系了
 */

// let newObj3 = JSON.parse(JSON.stringify(target))
// newObj3.friend.age = 100
// console.log(target.friend.age, newObj3.friend.age) // 50 100

//! 特殊情况 (当对象中含有 方法 和 undefined)

let target2 = {
  name: 'John',
  age: 20,
  drive: () => {},
  girlFriend: undefined,
}

// let newObj4 = JSON.parse(JSON.stringify(target2))

// console.log(newObj4) // { name: 'John', age: 20 }

//这里我们发现 drive 和 girlFriend两个属性都丢了
//? 这是因为 JSON.stringfy 不能将方法和undefined属性转为字符串，在转换为字符串过程中就丢失了，解析回来也没有了

// TODO: 解决 JSON.parse JSON.stringfy造成的属性丢失的情况

// 递归遍历
const deepCopy = (obj) => {
  const result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 如果属性是对象 递归调用自身
      if (obj[key] && typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

// let newObj5 = deepCopy(target2)
// console.log(newObj5) // 此时不会存在丢失现象 drive girlFriend 属性都复制过来了

// TODO: 拷贝Symbol 属性
// 上述方法 在拷贝Symbol属性会丢失

let target3 = {
  [Symbol('name')]: 'John',
  age: 20,
  drive: () => {},
  girlFriend: undefined,
}

// 因为 for ... in 循环拿不到 Symbol 属性，如果要拿到Symbol属性 有两种方法：
/**
 *  1、使用 Object.getOwnPropertySymbols
 *     会返回Symbol 属性列表
 *  2、使用 Reflect.ownKeys
 *     以数组形式（索引:值）会返回对象的所有自身所有属性，包括Symbol属性 和 不可枚举属性，但是不包括继承属性
 */

// TODO: 修改 deepCopy 方法 使得不丢失 Symbol

const deepCopy1 = (obj) => {
  const result = Array.isArray(obj) ? [] : {}
  // 用 Reflect.ownKeys 可以获取Symbol属性，用 for...of 循环数组
  for (let key of Reflect.ownKeys(obj)) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === obj) {
        result[key] = deepCopy(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

// let newObj6 = deepCopy1(target3)
// console.log(newObj6)

// TODO: 解决循环调用问题

let target4 = {
  [Symbol('name')]: 'John',
  age: 20,
  drive: () => {},
  girlFriend: undefined,
}

target4.target = target4

//! 以上情况会造成循环调用的情况
// target 属性引用了自身，有了循环引用
// 为了解决这个问题，我们需要每次都将引用类型的键和值都记录下来，由于Object的键不能是对象，所以不能用Object记录，这里用WeakMap记录

const deepCopy2 = (originObj) => {
  // 全局只能有一个记录的map
  const map = new WeakMap()

  function dp(obj) {
    const result = Array.isArray(obj) ? [] : {}

    const existObj = map.get(obj)
    // 检查 map中是不是已经有这个对象了，有了就直接返回，不在递归
    if (existObj) {
      return existObj
    }

    // 没有就记录
    map.set(obj, result)

    for (let key of Reflect.ownKeys(obj)) {
      if (Object.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          result[key] = dp(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
    return result
  }
  return dp(originObj)
}

// TODO: 浅拷贝的应用 ： mixin--混合模式

const mixin = {
  // 注意：这里的say 和 run 不能写成箭头函数，因为箭头函数拿不到正确的 this
  say() {
    console.log(`${this.name} 在说话`)
  },
  run() {
    console.log(`${this.name} 在跑步`)
  },
}

class Student {
  constructor(name) {
    this.name = name
  }
}
//? 使用浅拷贝的方式，让Student 类具有mixin的方法
//? 直接将 mixin里面的方法 复制到了Student的原型链上
Object.assign(Student.prototype, mixin)

const student1 = new Student('wjx')
student1.say()

// TODO: 深拷贝应用： pick 函数

// ? pick 函数 只会深拷贝我们所需要的属性
// 将之前的递归函数 加上一个值判断即可

const pick = (originObj, property) => {
  const map = new WeakMap()

  function dp(obj, skipEqual) {
    let result = Array.isArray(obj) ? [] : {}

    const existObj = map.get(obj)
    if (existObj) {
      return existObj
    }

    map.set(obj, result)

    for (let key of Reflect.ownKeys(obj)) {
      if (obj.hasOwnProperty(key) && key === skipEqual) {
        if (obj[key] && typeof obj[key] === 'object') {
          result[key] = dp(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
    return result
  }
  return dp(originObj, property)
}
