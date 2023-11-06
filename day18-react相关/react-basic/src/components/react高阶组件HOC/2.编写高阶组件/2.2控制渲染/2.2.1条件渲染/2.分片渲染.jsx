import { SyncOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import imgPicture from '../../../../../assets/img/1.png'
const renderQueue = []
let isFirstrender = false

const tryRender = () => {
  const render = renderQueue.shift()
  if (!render) return
  setTimeout(() => {
    render() /* 执行下一段渲染 */
  }, 300)
}
/* HOC */
function renderHOC(WrapComponent) {
  return function Index(props) {
    const [isRender, setRender] = useState(false)
    useEffect(() => {
      renderQueue.push(() => {
        /* 放入待渲染队列中 */
        setRender(true)
      })
      if (!isFirstrender) {
        tryRender() /**/
        isFirstrender = true
      }
    }, [])
    return isRender ? (
      <WrapComponent tryRender={tryRender} {...props} />
    ) : (
      <div className="box">
        <div className="icon">
          <SyncOutlined spin />
        </div>
      </div>
    )
  }
}
/* 业务组件 */
class Index extends React.Component {
  componentDidMount() {
    const { name, tryRender } = this.props
    /* 上一部分渲染完毕，进行下一部分渲染 */
    tryRender()
    console.log(name + '渲染')
  }
  render() {
    return (
      <div>
        <img width={200} height={200} src={imgPicture} alt="图片控制渲染" />
      </div>
    )
  }
}
/* 高阶组件包裹 */
const Item = renderHOC(Index)

const FenpianRender = () => {
  return (
    <React.Fragment>
      <Item name="组件一" />
      <Item name="组件二" />
      <Item name="组件三" />
    </React.Fragment>
  )
}

export default FenpianRender
