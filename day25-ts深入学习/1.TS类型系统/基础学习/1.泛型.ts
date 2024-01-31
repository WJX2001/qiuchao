// TODO: 函数中的泛型

/* 
  具体场景：规定参数 a 和 b 必须是number类型或者string类型
*/

// 联合类型写法
function join(a: number | string, b: number | string) {
  return `${a}${b}`
}

// 泛型写法
function join2<T>(a: T, b: T) {
  return `${a}${b}`
}

console.log(join(1, '2'))

// TODO: 接口中的泛型
interface CreateArray {
  <T>(length: number, value: T): T[]
}
let createArrayFunc: CreateArray = function (length, value) {
  let result = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result
}
console.log(createArrayFunc(3, 'AAA')) // ['AAA', 'AAA', 'AAA']
console.log(createArrayFunc(2, true)) // [true, true]
