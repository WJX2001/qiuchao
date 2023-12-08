window.onload = function () {
  // 存放图片的数组
  const images = ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg']


  // 获取最外层div盒子
  const scrollContainer = document.querySelector('.scroll-container')

  let currentIndex = 0

  // 动态创建子元素
  function createItem (index) {
    // 从images数组获取下标为Index的值
    const imgUrl = images[index]

    // 动态创建div盒子，将图片作为其子元素，再将div盒子加到最外层的scrollContainer
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<img src="${imgUrl}"/>`
    scrollContainer.appendChild(item)
    return item
  }


  // 每次滚动的时候 调用初始化函数
  function resetElements () {
    scrollContainer.innerHTML = ''
    //上一张图片下标
    const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    //下一张图片的下标
    const nextIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1

    //创建上一张图片item
    createItem(prevIndex).classList.add('prev')
    //创建当前图片item
    createItem(currentIndex).classList.add('cur')
    //创建下一张图片item
    createItem(nextIndex).classList.add('next')
  }
  resetElements()

  //表示是否正在动画中
  let isAnimating = false

  //监听滚动事件
  scrollContainer.addEventListener('wheel', (e) => {
    if (!e.deltaY) return

    //当前正在滚动时，跳出
    if (isAnimating) return

    isAnimating = true

    if (e.deltaY > 0) { //向下滚动
      scrollContainer.classList.add('scroll-down')
      //改变当前图片的下标
      currentIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1
    } else { //向上滚动
      scrollContainer.classList.add('scroll-up')
      //改变当前图片的下标
      currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    }
  })

  // 滚动结束之后
  scrollContainer.addEventListener('transitionend', () => {
    //表示当前为滚动
    isAnimating = false

    // 滚动结束移除类名
    scrollContainer.classList.remove('scroll-down')
    scrollContainer.classList.remove('scroll-up')
    resetElements()
  })



}