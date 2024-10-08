// TODO: 缓存函数
/**
 *
 *
 */

function memoize<T extends (...args: any[]) => any>(fn: T) {
  const cache = new Map()
  return (...args: Parameters<typeof fn>) => {
    const key = JSON.stringify(fn)
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

const add = (a: number, b: number) => a + b
const func = memoize(add)
console.log(func(1, 2))

// TODO: TS 内置类型工具

// 1、Awaited
type promise = Promise<string>
type p = Awaited<promise> // string

// 定义一个返回Promise的函数

function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('成功了')
    }, 1000)
  })
}

// 使用 Awaited 获取 Promise结果的类型
type ResultType = Awaited<ReturnType<typeof fetchData>>

const result: ResultType = 'Awaited' // 此处类型会被推断为string

async function useResult() {
  const data = await fetchData()
  console.log(data) // string
}
useResult()

// 2、ReturnTyoe和Parameters 配对，一个是获取函数类型的参数类型，一个是获取函数类型的返回值类型

/**
 * Parameters 实现
 *  infer 类型推导，可以在类型被使用时推导出具体的类型，T如果是(...args: infer P) => any的子类型, 就返回P, 否则返回never(表示永不可达)。
 */
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never

/**
 * ReturnType实现
 */

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any

// 我们使用内置类型工具Awaited 就是要拿到Promise里面的类型string

/**
 * 实现思路：
 *    利用 infer 推断 Promise里面的类型
 */
// type MyAwait<T> = T extends Promise<infer P> ? P : never
type MyAwait<T> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwait<P>
    : p
  : T

// 3、Partial

// 基础用法
type obj = {
  a: 1
  b: 2
}

type obj2 = Partial<obj>
// 相当于
type obj3 = {
  a?: 1 | undefined
  b?: 2 | undefined
}

// 实现
type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type obj4 = MyPartial<obj>

// 如果有多个对象嵌套，就使用递归
type obj5 = {
  a: 1
  b: {
    c: 2
  }
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type obj6 = DeepPartial<obj5>

// 4. Required
type obj7 = {
  a: 1
  b: {
    c: 2
  }
}

type MyRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? MyRequired<T[K]> : T[K]
}
type obj8 = MyRequired<obj7>

// 实际用法
let obj9: obj8 = {
  a: 1,
  b: {
    c: 2,
  },
}

// 5.Readonly
type MyReadobly<T> = {
  readonly [K in keyof T]: T[K]
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

// 6. Record
type obj10 = Record<string, any>
/**
 * type obj = {
 *    [x: string]: any
 * }
 */

/**
 *  K extends keyof any :
 *      这里 使用了泛型约束，确保K是任何类型的键集合的子集
 *      keyof any 表示任何类型的所有键的联合
 *
 */

type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

// 7. Pick用法
/**
 * 从大的obj中抽出几个属性 组成新的obj
 */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

// 8. Omit 同理 去除某个键

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>


// 8. Exclude
type MyExclue<T,U> = T extends U ? never : T
