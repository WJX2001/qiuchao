function _new(func, ...args) {
  const obj = {}
  obj.__proto__ = func.prototype
  let result = func.apply(obj, args)

  return result instanceof Object ? result : obj
}
