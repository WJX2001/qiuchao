// // 删除链表倒数第n 个节点
// function Find(root) {
//   let dummy = new ListNode(-1)
//   dummy.next = root
//   let tmp = findIndex(root, n + 1)

//   tmp.next = tmp.next.next
//   return dummy.next
// }

// function findIndex(root, n) {
//   let fast = root
//   for (let i = 0; i < n; i++) {
//     fast = fast.next
//   }

//   let slow = root
//   while (fast !== null) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

// var originalString = 'welcome to my hex
// var upperCaseString = originalString.toUpperCase()
// console.log(upperCaseString)

// let arr = [1, 3, 4, 5, 7, 8, 9]
// let a = (index) => {
//   console.log(arr.find((i) => arr.indexOf(i) === index))
// }
// a()
// function getCode() {
//   return axios.get('http://baidu.com')
// }

// function getList(param) {
//   return axios.get('http://baidu.com', { param })
// }

// var num = Math.floor(Math.random() * 100)

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   })
// }

// function getAge() {
//   'use strict'
//   age = 20
//   console.log(age)
// }
// getAge()

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   // 建立一个栈
//   let stack = []
//   for (let c of s) {
//     if (c === '(' || c === '[' || c === '{') {
//       stack.push(c)
//     } else {
//       if (stack.length && leftOf(c) === stack[stack.length - 1]) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return !stack.length
// }

// function leftOf(x) {
//   if (x === ')') {
//     return '('
//   }

//   if (x === ']') {
//     return '['
//   }

//   return '{'
// }

// var increasingBST = function (root) {
//   // 首先进行中序遍历
//   let res = []
//   function traverse(root) {
//     if (root === null) {
//       return
//     }
//     traverse(root.left)
//     res.push(root.val)
//     traverse(root.right)
//   }
//   traverse(root)

//   // 创建一个链表
//   const dummyNode = new TreeNode(-1)
//   let curNode = dummyNode
//   for (const value of res) {
//     curNode.right = new TreeNode(value)
//     curNode = curNode.right
//   }
//   return dummyNode.right
// }

var lengthOfLongestSubstring = function (s) {
  let window = new Map()
  let left = 0,
    right = 0
  let res = 0

  while (right < s.length) {
    let c = s[right]
    right++

    // 进行窗口内数据更新
    window.set(c, (window.get(c) || 0) + 1)
    // 判断左侧是否需要收缩
    while (window.get(c) > 1) {
      let d = s[left]
      left++
      window.set(d, window.get(d) - 1)
    }
    res = Math.max(res, right - left)
  }
  return res
}

let s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s)) // 3
