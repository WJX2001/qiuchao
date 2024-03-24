
// TODO: 实现图片异步加载函数
const loadAsyncImage = async () => {
  let imgs = ['xxxx.png', 'aaaa.jpg']
  let promise = async function (url) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = url
      image.onload = function () {
        document.body.appendChild(image)
        resolve('图片加载完成')
      }
    })
  }

  for (let url of imgs) {
    await promise(url)
  }
}

loadAsyncImage()


// TODO: 使用Promise.race 可以设置图片请求超时
// 请求某个图片资源
const requestImg = (url) => {
  var p = new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onload = function () {
      resolve('图片加载完成')
    }
  })
  return p
}

// 延时函数 用于给请求计时
function timeout () {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('图片请求超时')
    }, 5000)
  })
  return p
}

// 请求超时效果
Promise.race([requestImg(), timeout()]).then((res) => {
  console.log(res)
}).catch((res) => {
  console.log(res)
})