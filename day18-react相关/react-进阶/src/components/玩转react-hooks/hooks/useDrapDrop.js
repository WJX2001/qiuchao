import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

const useDrapDrop = () => {
  // 保存上次移动位置
  const lastOffset = useRef({
    x: 0 /* 当前 x 值 */,
    y: 0 /* 当前 y 值 */,
    X: 0 /* 上一次保存X值 */,
    Y: 0 /* 上一次保存Y值 */,
  })

  // 获取当前的元素实例
  const currentDom = useRef(null)

  // 更新位置
  const [, forceUpdate] = useState({})
  /* 监听开始/移动事件 */
  const [ontouchstart, ontouchmove, ontouchend] = useMemo(() => {
    /* 保存left right 信息 */
    const currentOffset = {}
    /* 开始滑动 */
    const touchstart = function (e) {
      const targetTouche = e.targetTouches[0]
      currentOffset.X = targetTouche.clientX
      currentOffset.Y = targetTouche.clientY
    }

    /* 滑动中 */
    const touchmove = function (e) {
      const targetT = e.targetTouches[0]
      /* 
        在下面这行代码中：
        1. lastOffset.current.X：这是元素上一次拖拽结束时的x坐标
        2. targetT.clientX：这是当前触摸事件的x坐标，表示当前触摸点相对于浏览器窗口左侧的距离
        3. currentOffset.X: 这是触摸开始的x坐标
        4. targetT.clientX - currentOffset.X 计算的是触摸点从触摸开始到现在移动的距离
        5. 然后将这段距离加到 lastOffset.current.X 上，获得元素新的x 坐标
      */

      //? 这样做的目的：元素根据触摸点的移动距离进行移动，而不是直接跳到触摸点的位置，这样可以实现更自然的拖拽效果
      let x = lastOffset.current.X + targetT.clientX - currentOffset.X
      let y = lastOffset.current.Y + targetT.clientY - currentOffset.Y

      lastOffset.current.x = x
      lastOffset.current.y = y
      forceUpdate({
        x,
        y,
      })
    }

    /* 监听滑动停止事件 */

    const touchend = () => {
      lastOffset.current.X = lastOffset.current.x
      lastOffset.current.Y = lastOffset.current.y
    }
    return [touchstart, touchmove, touchend]
  }, [])

  useLayoutEffect(() => {
    const dom = currentDom.current
    dom.ontouchstart = ontouchstart
    dom.ontouchmove = ontouchmove
    dom.ontouchend = ontouchend
  }, [])

  return [{ x: lastOffset.current.x, y: lastOffset.current.y }, currentDom]
}

export default useDrapDrop
