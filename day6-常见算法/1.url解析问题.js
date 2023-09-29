// TODO: 基础版本

// 获取 GET参数，也就是获取到: {a: 1, b: 2, c: 3}
let url = 'http://www.xxx.com?a=1&b=2&c=3'

// split 版本
const fun1 = (url) => {
  let obj = {}
  url
    .slice(url.indexOf('?') + 1)
    .split('&')
    .map((item) => {
      let [key, val] = item.split('=')
      obj[key] = val
    })
  return obj
}

let res = fun1(url)
console.log(res)

// reduce 版本
const fun2 = (url) => {
  let res = url
    .slice(url.indexOf('?') + 1)
    .split('&')
    .reduce((prev, curr) => {
      let [key, val] = curr.split('=')
      if (!val) return prev
      prev[key] = val
      return prev
    }, {})
  return res
}

let res1 = fun2(url)
console.log(res1)

console.log(fun2('http://www.xxx.com?a&b&c'))

// TODO: 参数变化
let url1 = 'http://www.xxx.com?a[name]=tiger&a[age]=25&b[name]=cat&c=666'

// 解析成以下这样
// {
//     a:{
//         name:'tiger',
//         age:25
//     },
//     b:{
//         name:'cat'
//     },
//     c:666
// }

const parse = (url) => {
  let res = url
    .slice(url.indexOf('?') + 1)
    .split('&')
    .reduce((prev, cur) => {
      let [key, val] = cur.split('=')
      if (!val) return prev
      // 解析 'a[name]' -> [a,name]
      let path = key
        .replace('[', ']')
        .split(']')
        .filter((x) => x) // [ 'a', 'name' ]
      deep_parse(
        prev, // {}
        path, // [a,name]
        val // tiger
      )
      return prev
    }, {})
  return res
}

// 深度判断
const deep_parse = (obj, path, val) => {
  let i = 0
  // 处理二级 key 只有二级key 情况才会进入for循环 i会等于1
  for (; i < path.length - 1; i++) {
    if (!obj[path[i]]) {
      obj[path[i]] = {}
    }
    obj = obj[path[i]]
  }
  // 一级key 的情况
  obj[path[i]] = val
}

// a]name]  ->  [ 'a', 'name', '' ] -> [ 'a', 'name' ]
// console.log(
//   'a[name]'
//     .replace('[', ']')
//     .split(']')
//     .filter((x) => x)
// )
console.log(parse(url1))
