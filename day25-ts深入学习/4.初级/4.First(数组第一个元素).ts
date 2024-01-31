// TODO: 用来返回数组的第一个元素

// 索引方式实现
type First<T extends any[]> = T extends [] ? never : T[0]

// 占位实现方式
type First2<T extends any[]> = T extends [infer R, ...infer L] ? R : never

type resultForFirst = First<[3, 2, 1]>

/**
 * 代码详解
 *    T extends [] ： 用来判断T 是否是一个空数组
 *    T[0]：根据下标取数组第一个元素
 *    infer R ：表示数组第一个元素的占位
 *    ...infer L : 表示数组剩余元素的占位
 */
