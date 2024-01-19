// TODO: void null undefined

/**
 * null 和 undefined 是所有类型的子类型 可以把undefined 和 null 赋值给number等类型的变量
 * void 而言 只能被赋值为 null 或者 undefined
 */

// TODO: 数组

/* 类型+方括号 */
let numArray: number[] = [1, 2, 3]

/* 泛型写法 */
let numArray2: Array<number> = [1, 2, 3]

/* 也可以使用联合类型 */
let tsArray: (number | string)[] = [1, '2', '3']

/* 存储对象类型 */
let objArray: { name: string; age: number }[] = [{ name: 'aaa', age: 12 }]

/* react 写法 */
// const [arr, setArr] = useState<Array<{id: string,name: string}>>([])

enum colors {
  red,
  green,
  blue,
}

console.log(colors[1])
