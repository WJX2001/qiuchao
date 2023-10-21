// 改造下列代码
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

// TODO: 写法一：闭包写法
// for (var i = 0; i < 10; i++) {
//   ;(function (i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 1000)
//   })(i)
// }

// TODO: 写法二：利用setTimeout 的第三个参数

for (var i = 0; i < 10; i++) {
  setTimeout(
    (i) => {
      console.log(i)
    },
    1000,
    i
  )
}
