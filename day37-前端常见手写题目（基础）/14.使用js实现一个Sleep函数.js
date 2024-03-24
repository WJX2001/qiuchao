// TODO: 手写一个sleep函数

/**
 * JS是单线程语言，在多线程语言中，会有一种场景，让项目运行十分钟后执行一段代码，Sleep函数会停下当前线程，让其他程序先执行
 */

// TODO: 使用定时器封装
// 缺点：需要不断往里面传回调函数，且不能达到阻塞的效果
function sleep (fn, time) {
  setTimeout(() => {
    fn()
  }, time)
}

// TODO: 使用Promise 封装
// 可以实现链式调用，解决了回调函数的问题
// 缺点：无法阻塞线程
function sleepByPromise (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// sleep(1000).then(() => console.log('sss'))

// TODO: 使用async/await 封装
const fnA = () => {console.log('fnA')}
const fnB = () => {console.log('fnB')}
const fnC = () => {console.log('fnC')}

const sleep1 = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    },time)
  })
} 

async function sleepByAsync () {
  fnA()
  await sleep1(1000)
  console.log('E')
  fnB()
  await sleep1(1000)
  fnC()
  await sleep1(1000)
  console.log('end')
}

sleepByAsync()

