// TODO: Pick 表示从一个类型中选取几个字段组合成一个新的类型

type PersonForPick = {
  name: string
  age: number
  address: string
  sex: number
}

type PickResult = Pick<PersonForPick, 'name' | 'address'>

// ? 结果如下
// type PickResult = {
//   name: string;
//   address: string;
// }

// TODO: 实现方式

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type PickResult2 = MyPick<PersonForPick, 'name' | 'address'>
