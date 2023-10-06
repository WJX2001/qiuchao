// TODO: 递归写法

// 定义二叉树节点的构造函数
function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

// 定义一个函数来更新
function updateTreeNodeValue(root) {
  if (root === null) {
    return 0
  }

  // 递归更新 左子树 和右子树
  let leftSum = updateTreeNodeValue(root.left)
  let rightSum = updateTreeNodeValue(root.right)

  // 计算当前节点的值
  let totalSum = root.val + leftSum + rightSum
  // 更新当前节点的值
  root.val = totalSum
  return
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

updateTreeNodeValue(root)

console.log(root.val) // 输出更新后的根节点值

// TODO: 迭代写法 层序遍历
function updateTreeNodeValue1(root) {
  if (root === null) {
    return
  }
  let q = []
  q.push(root)

  while (q.length > 0) {
    let sz = q.length
    for (let i = 0; i < sz; i++) {
      let cur = q.shift()
      let sum = 0
      if (cur.left) {
        sum += cur.left.val
      }
      if (cur.right) {
        sum += cur.right.val
      }

      // 更新节点
      cur.val = sum
    }
  }
}
const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)

updateTreeNodeValue1(root1)
console.log(root1.val)
