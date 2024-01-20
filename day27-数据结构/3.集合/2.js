// ES6 使用拓展运算符来进行集合运算 

const setA = new Set()
setA.add(1).add(2).add(3)


const setB = new Set()
setB.add(2).add(3).add(4)


// 并集
console.log(new Set([...setA, ...setB]))
// 交集
console.log(new Set([...setA].filter(x => setB.has(x))))

// 差集
console.log(new Set([...setA].filter(x => !setB.has(x))))

// 子集
console.log([...setA].every(value => setB.has(value)))