import React, { useEffect, useRef, useState } from 'react'

// TODO: 自定义useScroll 设计思路
/**
 * 需要实现功能：
 *  1. 监听滚动条滚动
 *  2. 计算吸顶临界值，渐变值，透明度
 *  3. 改变 state 渲染视图
 */

// * 红色色块 有吸顶效果
// * 粉色色块 是固定上边但是有少量偏移，加上逐渐变透明效果

const useScoll = () => {
  const dom = useRef(null)
  const [scrollOptions, setScrollOptions] = useState({
    top: 0,
    suctionTop: false,
    opacity: 1,
  })

  useEffect(() => {
    const box = dom.current
    const offsetHeight = box.offsetHeight
    const radio = (box.offsetHeight / 500) * 20
    // 滚动函数
    const handerScroll = () => {
      const scrollY = window.scrollY
      /* 控制透明度 */
      const computerOpacity = 1 - scrollY / 160
      /* 控制吸顶效果 */
      const offsetTop = offsetHeight - scrollY - (offsetHeight / 500) * 84
      const top = 0 - scrollY / 5

      setScrollOptions({
        opacity: computerOpacity <= 0 ? 0 : computerOpacity,
        top,
        suctionTop: offsetTop < radio,
      })
    }

    document.addEventListener('scroll', handerScroll)

    return function () {
      document.removeEventListener('scroll', handerScroll)
    }
  }, [])

  return [scrollOptions, dom]
}

export default useScoll
