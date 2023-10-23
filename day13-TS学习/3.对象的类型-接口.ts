// TODO: 接口：对类的一部分行为进行抽象

interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25,
}

// TODO: 可选属性

interface Person1 {
  name: string
  age?: number
}

let tom1: Person1 = {
  name: 'Tom',
}

// TODO: 任意属性

// * [propName: string] 定义了任意属性取 string 类型的值
interface Person2 {
  name: string
  age?: number
  [propName: string]: any
}

let tom2: Person2 = {
  name: 'wjx',
  gender: 'male',
}

//! 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

// interface Person3 {
//   name: string
//   age?: number
//   [propName: string]: string
// }

//* 上述例子中 任意属性的值允许是 string，但是可选属性age的值却是number，number不是string的子属性，所以报错

// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型

interface Person3 {
  name: string
  age: number
  [propName: string]: string | number
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male',
}

// TODO: 只读属性

interface Person4 {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
