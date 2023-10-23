// TODO: 函数声明

//* 在JS中，有两种常见的定义函数的方式：函数声明和函数表达式

// 函数声明
function sum3(x, y) {
  return x + y
}

// 函数表达式
let mySum = function (x, y) {
  return x + y
}

function sum2(x: number, y: number): number {
  return x + y
}

// TODO: 用接口定义函数的形状

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// TODO: 可选参数

// 可选参数后面不允许再出现必须参数

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let tomcat = buildName('TOM', 'Cat')

// TODO: 剩余参数

// * 使用...rest 的方式获取函数中的剩余参数(rest 参数)

function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item)
  })
}

let a: any[] = []
push(a, 1, 2, 3)

// * 事实上 items 是一个数组，仍可以用数组的类型定义

// * 实现字符串反转

function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
