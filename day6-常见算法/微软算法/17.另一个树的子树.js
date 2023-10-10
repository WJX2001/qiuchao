var isSubtree = function (root, subRoot) {
  if (root === null) {
    return subRoot === null
  }

  if (isSame(root, subRoot)) {
    return true
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSame(p, q) {
  if (!p && !q) {
    return true
  }

  if (!p || !q) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }

  return isSame(p.left, q.left) && isSame(p.right, q.right)
}
