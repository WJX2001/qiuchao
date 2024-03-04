// 实现一个深拷贝

// TODO: JSON 实现的深拷贝
/* 
  1、会忽略 undefined 和 symbol
  2、不可以对Function 进行拷贝 JSON格式不支持Function 在序列化的时候会自动删除
*/
function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 示例代码
const demoJsonStringfyObj = {
  name: 'A',
  name1: undefined,
  name2: function () { },
  name3: Symbol('A')
}
console.log(deepClone(demoJsonStringfyObj)) // { name: 'A' }



// TODO: 递归实现(会有循环引用的问题)
function cloneDeepFunc (obj) {
  const newObj = {}
  let keys = Object.keys(obj)
  let key = null
  let data = null

  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    data = obj[key]

    if (data && typeof data === 'object') {
      newObj[key] = cloneDeepFunc(data)
    } else {
      newObj[key] = data
    }
  }
  return newObj
}


// TODO: 解决循环引用问题
function deepCloneFunc (obj, parent = null) {
  // 创建一个新对象
  let result = {}
  let keys = Object.keys(obj)
  let key = null, temp = null, _parent = parent

  // 该字段有父级则需要追溯该字段的父级
  while (_parent) {
    // 如果该字段引用了它的父级则为循环引用
    if (_parent.originalParent === obj) {
      // 循环引用直接返回同级的新对象
      return _parent.currentParent
    }
    _parent = _parent.parent
  }

  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    temp = obj[key]

    // 如果字段的值也是一个对象
    if (temp && typeof temp === 'object') {
      // 递归
    }
  }
}










/* 
  首先实现一个浅拷贝：
    如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址
    浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
*/


// TODO: 浅拷贝
function shallowClone (obj) {
  const newObj = {}
  for (let prop in obj) {
    newObj[prop] = obj[prop]
  }
  return newObj
}

/* 
  类似的浅拷贝：
    1、Object.assign
    2、Array.prototype.slice() 
    3、Array.prototype.concat()
    4、使用拓展运算符实现的复制
*/


// TODO: Object.assign

var obj = {
  age: 18,
  nature: ['smart', 'good'],
  friend: undefined,
  names: {
    name1: 'fx',
    name2: 'xka',
    name3: {
      name4: 'xkb'
    },


  },
  love: function () {
    console.log('fx is a great girl')
  }

}

var fxObj = {
  sex: 'male'
}

var newObj = Object.assign(fxObj, obj)
console.log(newObj)


// TODO: 当拷贝Symbol类型属性的时候会报错
const o1 = { a: 1 }
const o2 = { [Symbol('foo')]: 2 }
const obj1 = Object.assign({}, o1, o2)


// TODO: 原型链上的属性和不可枚举的属性不能被复制
const obj2 = Object.create(
  // foo 在 obj的原型链上
  { foo: 1 },
  {
    bar: {
      value: 2  // bar 是不可枚举属性
    },
    baz: {
      value: 3,
      enumerable: true,  // baz 是可枚举的自有属性
    }
  }
)

const newObj1 = Object.assign({}, obj2)
console.log(newObj1) // { baz: 3 }


// TODO: 

