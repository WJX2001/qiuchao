import React, { useState } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import imgPicture from '../../../../../assets/img/1.png'

// TODO: 对于属性代理的高阶组件，虽然不能在内部操控渲染状态，但是可以在外部控制当前组件是否渲染

// * 应用于：权限隔离，懒加载，延时加载等场景

function renderHOC(WrapComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = { visible: true }
    }

    setVisible() {
      this.setState({ visible: !this.state.visible })
    }

    render() {
      const { visible } = this.state
      return (
        <div className="box">
          <button onClick={this.setVisible.bind(this)}>挂载组件</button>
          {visible ? (
            <WrapComponent
              {...this.props}
              setVisible={this.setVisible.bind(this)}
            />
          ) : (
            <div className="icon">
              <SyncOutlined spin className="theicon" />
            </div>
          )}
        </div>
      )
    }
  }
}

class Index extends React.Component {
  render() {
    const { setVisible } = this.props
    return (
      <div className="box">
        <p>hello,my name is alien</p>
        <img width={200} height={200} src={imgPicture} alt="图片控制渲染" />
        <button onClick={() => setVisible()}>卸载当前组件</button>
      </div>
    )
  }
}

const NewRenderHoc = renderHOC(Index)

export default NewRenderHoc
