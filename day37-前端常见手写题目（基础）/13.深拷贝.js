// TODO: 深拷贝deepclone

/**
 *  可能的问题：
 *    - json方法出现函数或symbol类型的值的时候，会失效
 *    - 处理循环引用问题
 *    - 开辟一个存储空间，来存储当前对象喝拷贝对象的对应关系
 *    - 对引用类型递归拷贝直到属性为原始类型
 */

function myDeepClone (obj) {
  let newObj = {}

  let keys = Object.keys(obj)
  let key = null, data = null
  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    data = obj[key]

    if (data && typeof data === 'object') {
      newObj[key] = myDeepClone(data)
    } else {
      newObj[key] = data
    }

  }
  return newObj

}

// TODO: 解决循环依赖问题

const deepClone = (target, cache = new WeakMap()) => {
  if (target === null || typeof target !== 'object') {
    return
  }

  if(cache.get(target)) {
    return target
  }
  const copy = Array.isArray(target) ? [] : {}
  cache.set(target, copy)
  Object.keys(target).forEach(key => copy[key]  =deepClone(target[key],cache))
  return copy

}