// TODO: 字典 也称为映射、符号表或关联数组  字典经常用来保存对象的引用地址


function defaultToString (item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

/**
 *  set(key,value)     // 向字典中添加新元素 如果key已经存在，那么已存在的value会被覆盖
 *  remove(key)        // 在字典中移除指定键的元素
 *  hasKey(key)        // 在字典中判断是否存在指定键的元素
 *  get(key)           // 在字典中获取指定键的元素
 *  clear()            // 清空字典
 *  size()             // 返回字典所包含元素的数量
 *  isEmpty()          // 判断字典是否为空
 *  keys()             // 将字典中所有的键 以数组的形式返回
 *  values()           // 将字典中所有的值 以数组的形式返回
 *  keyValues()        // 将字典中所有的[键，值]对返回
 *  forEach(callback)  // 字典迭代方法 
 */

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey (key) {
    let value = this.table[this.toStrFn(key)]
    return value !== null && value !== undefined
  }

  set (key, value) {

  }

}