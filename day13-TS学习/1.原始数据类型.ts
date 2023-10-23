// TODO: 布尔值

let isDone: boolean = false

// 注意，使用构造函数 Boolean 创造的对象不是布尔值

// let createdByNewBoolean: boolean = new Boolean(1);

//* new Boolean() 返回的是一个Boolean 对象

let createdByNewBoolean: Boolean = new Boolean(1)

let createByBoolean: boolean = Boolean(1)

//! 这里 boolean 是 JS 基本类型，Boolean是JavaScript构造函数

// TODO: 数值

let decLiteral: number = 6
let hexLiteral: number = 0xf00d

// TODO: 字符串
let myName: string = 'Tom'
let myAge: number = 25

// 模版字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month`

// TODO: 空值
//* 没有空值的概念，可以用 void 表示没有任何返回值

function alertName(): void {
  alert('My name is Tom')
}

//* 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined

// TODO: Null 和 Undefined

let u: undefined = undefined
let n: null = null

// undefined 赋值给 number 类型的变量

// let num2: number = undefined
// let u: undefined
// let num3: number = u
