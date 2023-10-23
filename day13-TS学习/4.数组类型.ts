// TODO: 数组的类型

// 类型+方括号 表示法

let fibonacci: number[] = [1, 1, 2, 3, 5]

//* 数组的项中不逊于出现其他的类型

// let fibonacci1: number[] = [1,'1',2,3,4] // 不能将类型“string”分配给类型“number”

// TODO: 数组泛型 Array<elemType> 表示数组

let fibonacci2: Array<number> = [1, 1, 2, 3, 5]

// TODO: 用接口表示数组

interface NumberArray {
  [index: number]: number
}

let fibonacci3: NumberArray = [1, 1, 2, 3, 6]
// NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字

// TODO: 类数组

//* 类数组不是数组类型，比如 arguments:

// function sum() {
//   let args: number[] = arguments // 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 26 项
// }

//*  argumemts 实际上是一个类数组，不能用普通的数组的方式来描述，应该用接口
interface ArgsArray {
  [index: number]: number // 约束索引的类型是数字的时候，值的类型必须是数字
  length: number // 约束了他还有 length 和 callee 两个属性
  callee: Function
}

function sum() {
  let args: ArgsArray = arguments
}

// * 实际上常用的类数组都有自己的接口定义：IArguments NodeList HTMLCollection 等

function sum1() {
  let args: IArguments = arguments
}

// 其中 IArguments 是 TS 定义好的类型，它实际上就是

interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}

// any 在数组中的应用

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
