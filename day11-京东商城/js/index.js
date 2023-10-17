// TODO: 实现模糊查询
let keyword = document.querySelector('.keyword') // 获取输入框
let searchHelper = document.querySelector('.search-helper') // 获取搜索下拉列表

// 定义数组模拟存储搜索的内容
let searchArr = [
  '小米手机',
  '华为手机',
  '苹果手机',
  '小米电视',
  '小米平板',
  '苹果12',
  '苹果13',
  '苹果手表',
]
// 给输入框绑定内容改变事件

keyword.oninput = function () {
  searchHelper.innerHTML = ''
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].indexOf(keyword.value) != -1) {
      searchHelper.innerHTML += '<p>' + searchArr[i] + '</p>'
      searchHelper.style.display = 'block'
    }
  }
}

keyword.onblur = function () {
  searchHelper.style.display = 'none'
}

// TODO: 实现轮播图的切换
let img = document.querySelector('.img')
let imgArr = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slide = document.querySelector('.slide')
let lis = document.querySelectorAll('.banner-btn li')
let count = 0

// 定义函数，用来切换图片的路径
function cutImg() {
  img.src = './image/' + imgArr[count]

  for (let i = 0; i < lis.length; i++) {
    lis[i].className = ''
  }

  lis[count].className = 'active'
}
// 设置定时器，每隔三秒切换图片
let timer = setInterval(function () {
  count++

  if (count > imgArr.length - 1) {
    count = 0
  }

  cutImg()
}, 3000)

// 点击下一张

next.onclick = function () {
  count++
  if (count > imgArr.length - 1) {
    count = 0
  }
  cutImg()
}

// 点击上一张
prev.onclick = function () {
  count--
  if (count < 0) {
    count = imgArr.length - 1
  }
  cutImg()
}

// 鼠标滑入div 将定时切换图片干掉
slide.onmouseover = function () {
  clearInterval(timer)
}

// 鼠标滑出div，定时器跑起来
slide.onmouseout = function () {
  timer = setInterval(function () {
    count++

    if (count > imgArr.length - 1) {
      count = 0
    }

    cutImg()
  }, 3000)
}

// 给li 绑定点击事件
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = () => {
    count = i
    cutImg()
  }
}

// TODO: 实现楼层定位功能

let header = document.querySelector('.header')
let banner = document.querySelector('.banner')
let elevator = document.querySelector('.elevator')

// TODO: 楼层滚动 字体颜色变化

let items = document.querySelectorAll('.content .item') // 获取所有的div
let elevatorA = document.querySelectorAll('.elevator a') // 获取所有的div

// 放各边界 临界值
let elevatorArr = []
// 基础的高度
let base = header.offsetHeight + banner.offsetHeight

for (let i = 0; i < items.length; i++) {
  base = base + items[i].offsetHeight
  elevatorArr.push(base)
}

function clearColor() {
  for (let i = 0; i < elevatorA.length; i++) {
    elevatorA[i].style.color = ''
  }
}

let search = document.querySelector('.search')
let searchM = document.querySelector('.search-m')
let form = document.querySelector('.form')
let searchLogo = document.querySelector('.search_logo')
document.onscroll = function () {
  // 获取滚动条垂直方向滚动了多少
  let top = document.documentElement.scrollTop || document.body.scrollTop

  // 获取到header 的高度
  let headerHeight = header.offsetHeight // 包括 height、padding、border

  // 获取到banner的高度
  let bannerHeight = banner.offsetHeight // 包括 height、padding、border

  // 当滚动条滚动到一定程度，将楼层的定位换成固定定位
  if (top >= headerHeight + bannerHeight) {
    elevator.className = 'elevator elevator-fix'
    search.className = 'search search-fix'
    searchM.style.height = '50px'
    form.style.top = '8px'
    searchLogo.style.display = 'block'
  } else {
    elevator.className = 'elevator'
    search.className = 'search'
    searchM.style.height = '60px'
    form.style.top = '25px'
    searchLogo.style.display = 'none'
  }

  // 实现楼层字体颜色切换
  if (top < header.offsetHeight + banner.offsetHeight) {
    clearColor()
  } else if (
    top >= header.offsetHeight + banner.offsetHeight &&
    top < elevatorArr[0]
  ) {
    clearColor()
    elevatorA[0].style.color = 'rgb(225, 37, 27)'
  } else if (top >= elevatorArr[0] && top < elevatorArr[1]) {
    clearColor()
    elevatorA[1].style.color = 'rgb(225, 37, 27)'
  } else if (top >= elevatorArr[1] && top < elevatorArr[2]) {
    clearColor()
    elevatorA[2].style.color = 'rgb(225, 37, 27)'
  } else if (top >= elevatorArr[2]) {
    clearColor()
    elevatorA[3].style.color = 'rgb(225, 37, 27)'
  }
}
