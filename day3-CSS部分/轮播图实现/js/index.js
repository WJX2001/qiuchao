var doms = {
  carousel: document.querySelector('.carousel'),
  indicator: document.querySelectorAll('.indicator span'),
}

/**
 * 移动轮播图到第几个板块
 * @param {*} index (板块索引)
 */
function moveTo(index) {
  doms.carousel.style.transform = `translateX(-${index}00%)`
  // 去除当前选中的指示器
  var active = document.querySelector('.indicator span.active')
  active.classList.remove('active')
  // 重新设置要选中的指示器
  doms.indicator[index].classList.add('active')
  currentIndex = index // 更新当前板块索引
}

doms.indicator.forEach(function (item, i) {
  item.onclick = function () {
    moveTo(i)
  }
})

// TODO: 实现自动播放

// 定义当前板块索引
let currentIndex = 0

function autoPlay() {
  if (currentIndex > doms.indicator.length) {
    currentIndex = 0 // 如果到达最后一个，需要进行切换
  }
  currentIndex++ // 自动切换到下一个模块

  moveTo(currentIndex)
}

// 使用定时器，隔一定时间调用
setInterval(autoPlay, 3000)
