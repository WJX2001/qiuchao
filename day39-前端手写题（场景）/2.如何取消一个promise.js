// TODO: 怎样实现取消promise的取消

// TODO: 借助 Promise.race 实现 最先被resolve或者reject的结果就是最后的结果

// 传入一个正在执行的promise
function getPromiseWithAbort(p) {
  let obj = {}
  // 内部定义一个新的promise 用来终止执行
  let p1 = new Promise((resolve,reject) => {
    obj.abort = reject
  })

  obj.promise = Promise.race([p,p1])
  return obj
}

// 进行调用
let promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('success')
  },3000)
})

var obj = getPromiseWithAbort(promise)
// 成功执行
obj.promise.then(res => {
  console.log(res)
})

// 取消执行 
obj.abort('取消执行')

