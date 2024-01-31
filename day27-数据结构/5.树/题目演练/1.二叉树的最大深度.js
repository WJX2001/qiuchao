var maxDepth = function (root) {
  let dep = 0
  let res = 0
  function traverse (root) {
    if (!root) {
      return
    }

    dep++
    res = Math.max(res, dep)
    traverse(root.left)
    traverse(root.right)
    dep--
  }
  traverse(root)
  return res
}

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let root1 = new TreeNode(3)

root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)

console.log(maxDepth(root1)) // 3
