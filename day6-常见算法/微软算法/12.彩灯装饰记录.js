var decorateRecord = function (root) {
  //存储结果
  const res = []
  //判断是否为空
  if (root == null) {
    return res
  }
  //声明一个队列
  const queue = []
  queue.push(root)

  while (queue.length > 0) {
    //队列：先进先出，拿到第一个值，也就是root。
    //此时queue.为空
    let vertex = queue.shift()
    //把vertex.val值添加到res
    res.push(vertex.val)
    //判断左右边是否有值
    if (vertex.left) {
      queue.push(vertex.left)
    }
    if (vertex.right) {
      queue.push(vertex.right)
    }
  }
  return res
}
