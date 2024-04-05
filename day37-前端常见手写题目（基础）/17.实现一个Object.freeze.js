// TODO: 实现一个Object.freeze方法

/**
 *  TODO: 锁定对象的方法 ：
 *    1、Object.preventExtensions() 对象不可扩展，不可以新增属性或方法，但可以修改/删除
 *    2、Object.seal() 在preventExtensions基础上，不可以新增属性或方法，不可以删除属性，但可以修改属性
 *    3、Object.freeze() 在seal基础上，对象所有属性只读，不可修改
 */



// TODO: 深层次递归

var deepFreeze = function (obj) {
  let allProps = Object.getOwnPropertyNames(obj)

  allProps.forEach(item => {
    if (typeof obj[item] === 'object') {
      deepFreeze(obj[item])
    }
  })
  return allProps
}

// TODO: 模拟实现一个Object.freeze方法 借助Object.seal

function myFreeze (obj) {
  if (obj instanceof Object) {
    Object.seal(obj)

    let p
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        Object.defineProperty(obj, p, {
          writable: false
        })
        myFreeze(obj[p]) // 递归 实现更深层次的冻结
      }
    }
  }
}

