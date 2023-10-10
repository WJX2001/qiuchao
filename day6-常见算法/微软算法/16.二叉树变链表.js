function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function flatten(root) {
  if (root === null) {
    return
  }

  flatten(root.left)
  flatten(root.right)

  // 后序位置
  var left = root.left
  var right = root.right

  // 将左子树作为右子树
  root.left = null
  root.right = left

  var p = root
  while (p.right !== null) {
    p = p.right
  }
  p.right = right
}

// 创建一棵二叉树进行测试
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(6)

console.log('原始二叉树结构：')
console.log(root)

flatten(root)

console.log('展开后的二叉树结构：')
console.log(root)
