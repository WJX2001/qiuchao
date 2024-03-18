// TODO: 实现一个浅拷贝

// es6 的 obj.assign
// 拓展运算符 [...args]
// 数组的浅拷贝  Array.prototype.slice  Array.prototype.concat

// TODO: 手动实现一个浅拷贝
function shallowCopy(obj) {
  if(!obj || typeof obj !== 'obj') return
  let newObj = Array.isArray(obj) ? [] : {}

  // 遍历对象的属性
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}



