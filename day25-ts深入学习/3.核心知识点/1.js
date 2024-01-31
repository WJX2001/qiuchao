function merge (to, from) {
  for (let key in from) {
    if (from.hasOwnProperty(key)) {
      to[key] = from[key]
    }
  }
  return to
}

const obj1 = { name: 'AAA' }
const obj2 = { age: 23 }

const result = merge(obj1, obj2)
console.log(result) // 输出：{ name: 'AAA', age: 23 }

