// TODO: 0.1+0.2问题 转成整数处理

function accAdd (arg1, arg2) {
  let r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }

  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }

  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}

var result = accAdd(0.1, 0.2)
console.log(result)