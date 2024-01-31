// TODO: 加号和减号
/*  
  在一些内置工具中 会出现 + 或者 - 这些符号
*/

type RequiredMy<T> = {
  [P in keyof T]-?: T[P]
}

type Person = {
  name: string
  age?: number
}

type result = RequiredMy<Person>
/* 
  结果如下:
    type result = {
      name: string;
      age: number;
    }
*/

// 说明这个 -? 作用是去掉类型中属性后面的? 整个Required的实际效果是去掉T类型中所有键后面的? 让所有属性变为必填

// TODO: keyof 和 in

/* 
  一般情况下 他们两个一起使用 当他们连在一起使用时 通常表示一个迭代的过程
  keyof: 在TS中 keyof T 这段代码表示获取 T 类型中所有属性值 这些属性键组合成一个联合类型
  in: 操作符的右侧通常跟一个联合类型
*/

type Person1 = {
  name: string
  age: number
}

type result1 = keyof Person1 // 结果：'name' | 'age'

//? 案例： 实现一个Readonly
type ReadonlyMy<T> = {
  readonly [P in keyof T]: T[P]
}

type Person2 = {
  name: string
  age: number
}

type result2 = ReadonlyMy<Person2>

// 结果如下

/* 
  type result2 = {
    readonly name: string;
    readonly age: number;
  }
*/

// TODO: never 类型表示永远不会有值的一种类型
/* 如果一个函数抛出一个错误 那么这个函数就可以用 never 或者 void 来表示其返回值 */

// never 更适合用来表示永远没有返回值的函数
function handleError(message: string): never {
  throw new Error(message)
}

// void 更适合用来表示返回值为空的函数
function handleError1(message: string): void {
  throw new Error(message)
}

// TODO: extends 关键词 一般用法有两种： 类型约束 和 条件约束

/**
 * 类型约束:
 *    U extends keyof T           // 在这里 keyof T 是一个整体 表示一个联合类型
 *    U extends 'name' | 'age'    // U 只能为 name或者age 二者其中一个
 *
 */

// TODO: infer 关键词的作用是延时推导 他会在类型未推导时进行占位，等到真正推导成功后，能准确返回正确的类型

/**
 * 使用 ReturnType 内置工具 他是一个用来获取 函数返回类型的工具
 */

type ReturnTypeMy<T> = T extends (...args: any) => infer R ? R : any

const add = (a: number, b: number) => {
  return a + b
}

type resultInfer = ReturnTypeMy<typeof add>

// TODO: & 符号

/**
 * TS 中有两种类型值得我们重点关注：联合类型和交叉类型
 */

// 联合类型
type resultAnd = 'name' | 1 | true | null

// 交叉类型

/* 
  type result = T & U
    这表示一个新的类型，其中这个类型包含T和U中所有的键 类似  Object.assign()
*/

//? 封装一个合并对象的merge函数

function merge<T, U, K extends T & U>(to: T, from: U): K {
  for (let key in from) {
    ;(to as unknown as K)[key] = from[key] as any
  }
  return to as unknown as K
}

const obj1 = { name: 'AAA' }
const obj2 = { age: 23 }
// js结果：{ name：'AAA'; age: 23; }
// ts结果：{ name: string; age: number; }
const result = merge(obj1, obj2)
