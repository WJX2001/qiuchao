// TODO: 类型断言 可以来手动指定一个值的类型

// * 当TS不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法

interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function getName(animal: Cat | Fish) {
  return animal.name
}

// 如果你想访问 某个非公共属性

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// TODO: 将一个父类断言为更加具体的子类

class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  //*  判断类型内容
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}
