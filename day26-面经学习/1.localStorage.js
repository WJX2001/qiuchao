// TODO: 写两个方法：
/* 
  1. 写入一个localstorage，写入时同时实现类似cookie maxage的功能
  2. 读取localstorage，如果已经过期，删除这个存储并返回null，如果未过期，返回这个存储。
*/



localStorage.__proto__.set = function (key, value, maxAge) {
  const obj = {
    data: value,
    validTime: Date.now() + maxAge
  }
  // 进行存储
  localStorage.setItem(key, JSON.stringify(obj))
}


// 读取值

localStorage.__proto__.get = function (key) {
  let val = localStorage.getItem(key)
  if (!val) return
  // 判断是否过期
  if (Date.now() - val.validTime > 0) {
    localStorage.removeItem(key)
    return null
  } else {
    return val.data
  }

}



