// TODO: hooks版本的分片渲染

import { SyncOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import imgPicture from '../../../../../assets/img/1.png'
const renderQueue = []
let isFirstrender = false

const tryRender = () => {
  const render = renderQueue.shift()

  if (!render) {
    return setTimeout(() => {
      render()
    }, 300)
  }
}

function renderHOC(WrapComponent) {
  return function Index(props) {
    const [isRender, setRender] = useState(false)
    useEffect(() => {
      renderQueue.push(() => {
        setRender(true)
      })

      if (!isFirstrender) {
        tryRender()
        isFirstrender = true
      }
    }, [])

    useEffect(() => {
      console.log(isRender)
    }, [isRender])

    return isRender ? (
      <WrapComponent tryRender={tryRender} />
    ) : (
      <div className="box">
        <div className="icon">
          <SyncOutlined spin />
        </div>
      </div>
    )
  }
}

const Index = ({ name, tryRender }) => {
  useEffect(() => {
    /* 上一部分渲染完毕，进行下一部分渲染 */
    tryRender()
    console.log(name + '渲染')
  }, [name, tryRender])

  return (
    <div>
      <img width={200} height={200} src={imgPicture} alt="图片控制渲染" />
    </div>
  )
}

const Item = renderHOC(Index)

const FenpianRender1 = () => {
  return (
    <React.Fragment>
      <Item name="组件一" />
      <Item name="组件二" />
      <Item name="组件三" />
    </React.Fragment>
  )
}

export default FenpianRender1
