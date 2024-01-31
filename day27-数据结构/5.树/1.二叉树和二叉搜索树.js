/**  
 *  insert(key)            // 向树中插入一个新的键
 *  search(key)            // 在树中查找一个键，如果节点存在，则返回true，如果不存在则返回false
 *  inOrderTraverse()      // 通过中序遍历方式遍历所有节点
 *  preOrderTraverse()     // 通过先序遍历方式遍历所有节点
 *  postOrderTraverse()    // 通过后序遍历方式遍历所有节点 
 *  min()                  // 返回树中最小的值/键
 *  max()                  // 返回树中最大的值/键
 *  remove(key)            // 从树中移除某个键
*/


function defaultCompare (a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}


class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  // insert方法 向树中插入一个节点
  insert (key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node, key) {
    // 要插入的值 小于当前node 的值 所以要放在当前节点的左边
    if (this.compareFn(key, node.key) === -1) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 中序遍历
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }



  // 先序遍历 以优先后代节点的顺序访问每个节点
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }


  // 后序遍历
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // 搜索最小值和最大值
  min () {
    return this.minNode(this.root)
  }
  minNode (node) {
    let current = node
    while (current && current.left) {
      current = current.left
    }
    return current
  }

  // 搜索最大值
  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    let current = node
    while (current && current.right) {
      current = current.right
    }
    return current
  }
}

// TODO: 中序测试
// const tree = new BinarySearchTree()
// tree.insert(11)
// tree.insert(7)
// tree.insert(15)
// tree.insert(5)
// tree.insert(3)
// tree.insert(9)
// tree.insert(8)
// tree.insert(10)
// tree.insert(13)
// tree.insert(12)
// tree.insert(14)
// tree.insert(20)
// tree.insert(18)
// tree.insert(25)
// tree.insert(6)
// const printNode = (value) => console.log(value)
// tree.inOrderTraverse(printNode)


// TODO: 测试

// const tree = new BinarySearchTree()
// tree.insert(11)
// tree.insert(7)
// tree.insert(15)
// tree.insert(5)
// tree.insert(3)
// tree.insert(9)
// tree.insert(8)
// tree.insert(10)
// tree.insert(13)
// tree.insert(12)
// tree.insert(14)
// tree.insert(20)
// tree.insert(18)
// tree.insert(25)
// tree.insert(6)

// const printNode = (value) => console.log(value)
// tree.preOrderTraverse(printNode)



// 后序测试
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

const printNode = (value) => console.log(value)
tree.postOrderTraverse(printNode) // 依次输出：3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

const minNode = tree.min()
const maxNode = tree.max()
console.log(minNode.key)  // 3
console.log(maxNode.key)  // 25