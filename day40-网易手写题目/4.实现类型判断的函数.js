// TODO: 实现一个函数 getType，他能识别所有的基础、复杂数据（数组、对象）等的数据类型；


function getType (value) {
  if (value === null) {
    return value + ''
  }
  if (typeof value === 'object') {
    return Object.prototype.toString.call(value).slice(8, -1)
  } else {
    return typeof value
  }
}

console.log(getType(123)) // 'number'
console.log(getType([[2,3,4]]))
console.log(getType({name: 'John', age: 30})) // 'object'

