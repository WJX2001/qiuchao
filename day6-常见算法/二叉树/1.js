// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
// }

// var isSameTree = function (p, q) {
//   if (p === null && q === null) {
//     return true
//   }
//   if (p === null || q === null) {
//     return false
//   }

//   if (p.val !== q.val) {
//     return false
//   }

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }

// var tree1 = new TreeNode(1)
// tree1.left = new TreeNode(2)
// tree1.right = new TreeNode(3)

// var tree2 = new TreeNode(1)
// tree2.left = new TreeNode(2)
// tree2.right = new TreeNode(3)

// console.log(isSameTree(tree1, tree2))
let a = [1, 3, 2, 4]

let max = a.sort((a, b) => a - b)[a.length - 1]
console.log(max)
