
const cache = new WeakMap()

// 实现一个浅度克隆
function deepClone(value) {
    if(typeof value !== 'object' || value === null) {
        return value
    }
    // value是对象
    if(cache.has(value)) {
        return cache.get(value)
    }
    const result = Array.isArray(value) ? [] : {}
    // 手动设置原型
    Object.setPrototypeOf(result,Object.getPrototypeOf(value))
    cache.set(value,result)
    for(let key in value) {
        if(value.hasOwnProperty(key) ){
            result[key] = deepClone(value[key])
        }
    }
    return result
}


// 测试结果
class Test {
    constructor() {
        this.a = 1
        this.b = 2
    }

    c() {
        console.log('c')
    }
}

const obj = new Test()

obj.h = obj

console.log(obj)
console.log(deepClone(obj))