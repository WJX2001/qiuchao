// TODO: TupleToObject<T> 用来把一个元组 换成一个 key/value 相同的对象
const tuple = ['msg', 'name'] as const

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}
