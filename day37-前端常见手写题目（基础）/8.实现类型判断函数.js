
// TODO: 实现类型判断函数
function getType (value) {
  if (value === null) {
    return value + ''
  }
  if (typeof value === 'object') {
    return Object.prototype.toString.call(value).slice(8,-1)
  } else {
    return typeof value
  }

}

console.log(getType([]))

