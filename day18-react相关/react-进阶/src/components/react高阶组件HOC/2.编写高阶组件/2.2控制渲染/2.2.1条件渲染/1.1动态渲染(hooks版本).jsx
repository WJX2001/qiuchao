// TODO: 将渲染函数使用 hooks改写

import { SyncOutlined } from '@ant-design/icons'
import { useState } from 'react'
import React from 'react'
import imgPicture from '../../../../../assets/img/1.png'

function useRenderHOC(WrapComponent) {
  const [visible, setVisble] = useState(true)

  const toggleVisible = () => {
    setVisble(!visible)
  }

  return (
    <div className="box">
      <button onClick={toggleVisible}>挂载组件</button>
      {visible ? (
        <WrapComponent setVisble={toggleVisible} />
      ) : (
        <div className="icon">
          <SyncOutlined spin className="theicon" />
        </div>
      )}
    </div>
  )
}

// TODO: 使用 hooks模式改写
function IndexHooks(props) {
  const { setVisible } = props

  return (
    <div className="box">
      <p>hello,my name is alien</p>
      <img width={200} height={200} src={imgPicture} alt="图片控制渲染" />
      <br />
      <button onClick={() => setVisible()}>卸载当前组件</button>
    </div>
  )
}

const RenderHocHooks = () => {
  return useRenderHOC(IndexHooks)
}

export default RenderHocHooks
