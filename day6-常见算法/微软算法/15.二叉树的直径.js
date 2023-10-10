var diameterOfBinaryTree = function (root) {
  let res = 0

  function traverse(root) {
    if (root === null) {
      return 0
    }

    let leftDep = traverse(root.left)
    let rightDep = traverse(root.right)

    // 后序位置
    res = Math.max(res, leftDep + rightDep)
    return 1 + Math.max(leftDep, rightDep)
  }
  traverse(root)
  return res
}
