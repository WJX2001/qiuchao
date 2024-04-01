// TODO: 实现函数的柯里化

function currying() {

}

// 测试柯里化函数
const sum = (a,b,c,d) => a+b+c+d  

console.log(currying(sum)(1)(2)(3)(4)) // 10
console.log(currying(sum,1)(2)(3)(4)) // 10
console.log(currying(sum,1,2)(3)(4)) // 10
console.log(currying(sum,1,2)(3,4)) // 10