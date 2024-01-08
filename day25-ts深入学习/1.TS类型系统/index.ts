// TODO: 数组
let boolArray: boolean[] = [true, false, true]

// TODO: 泛型

/* 在一个函数中，接受一个列表，并且返回这个列表的反向排序，这里约束是指传入至函数的参数与函数的返回值 */

/**
 * 函数接受一个类型为T，返回值为类型T的一个数组，
 * @param items
 * @returns
 */
function reverse<T>(items: T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1, 2, 3]
let reversed = reverse(sample)
console.log(reversed)

// TODO: 联合类型
/* 联合类型例子：一个可以接受字符串数组或者单个字符串的函数 */
function formatCommandLine(command: string[] | string) {
  let line = ''
  if (typeof command === 'string') {
    line = command.trim()
  } else {
    line = command.join(' ')
  }
  return line
}

console.log(formatCommandLine(' 123 '))

// TODO: 交叉类型
/* extend 模式，从两个对象中创建一个新的对象，新对象拥有着两个对象所有的功能，交叉类型可以安全的使用此种模式 */

function extendFunc<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  const result = <T & U>{}

  for (let id in first) {
    ;(<T>result)[id] = first[id]
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<U>result)[id] = second[id]
    }
  }

  return result
}

const x = extendFunc({ a: 'hello' }, { b: 2 })

// 现在拥有了a属性和b属性
const a = x.a
const b = x.b

// TODO: 枚举类型

enum CardSuit {
  Clubs,
  Wjx,
  Xjc,
  ZZH,
}
