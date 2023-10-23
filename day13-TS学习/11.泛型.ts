// TODO: 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型

// function createArray(length: number, value: any): Array<any> {
//   let result = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }

// * 没有准确的定义返回值的类型

//* 允许数组的每一项都为任意类型。我们预期的是，数组中
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []

  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray<string>(3, 'x')

//? 在函数名后添加<T> T 用来指代任意输入的类型

// TODO: 多个类型参数

// 实现一个 swap 函数，用来交换输入的元祖
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
