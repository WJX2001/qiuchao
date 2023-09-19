// function getPersonInfo(one, two, three) {
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }

// const person = 'Lydia'
// const age = 21
// console.log(getPersonInfo`${person} is ${age} years old`)

// function addToList(item, list) {
//   return list.push(item)
// }
// const result = addToList('nowcoder', ['hello'])
// console.log(result)

// TODO: 数组去重复
// const nums = [1, 3, 3, 5, 7]

// // filter 方法
// const newNums = nums.filter((n, i) => {
//   return nums.indexOf(n) === i
// })
// console.log(nums)
// console.log(newNums)

// // 利用 set
// const newNums2 = Array.from(new Set(nums))
// console.log(newNums2)

// // 利用 reduce 方法
// const newNums3 = nums.reduce((acc, n, i) => {
//   return [].concat(acc, nums.indexOf(n) === i ? n : [])
// })

// TODO: typeof用法: typeof返回值为字符串 ，所以返回值的类型就是 string

// var x = typeof x
// var res = typeof typeof x
// console.log(res)

// TODO: CSS 选择符

;<ul className="aaa">
  <li className="bbb">1</li>
  <li className="ccc">2</li>
  <li>3</li>
  <li>4</li>
</ul>

/**
 *  这里要求只能获取 值为3 的Dom元素
 *  ">" 为后代选择器，匹配 .aaa 的所有后代
 *  "~" 为同辈选择符号 .bbb ~ li  .bbb的所有后代 为后面的三个值
 *  "+" 为相邻同辈选择符，匹配 bbb 后面的第一个兄弟元素  ".ccc + li" 为正确解法
 * */
