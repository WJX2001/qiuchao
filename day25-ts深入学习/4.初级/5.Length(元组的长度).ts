// TODO: 元组的长度  Length<T> 用于获取一个数组（包括类数组）的长度

type Length<T extends any> = T extends { length: number } ? T['length'] : never

type T0 = Length<[1, 2, 3]>

// T extends { length: number } 判断T 是否是 {length: number} 的子类型 如果是则代表T为数组或者类数组
