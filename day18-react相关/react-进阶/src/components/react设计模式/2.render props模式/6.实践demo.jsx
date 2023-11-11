import React, { useMemo, useRef, useState } from 'react'
import { SyncOutlined } from '@ant-design/icons'
// TODO: 需求：通过render props 实现一个带loading效果的容器组件
/**
 * 被容器组件包裹，会通过props回传开启loading的方法
 * @returns
 */

// TODO: 容器组件

/* 
  Container函数思路：
    1. useState 用于显示 loading 效果，useMemo 用于执行 children 函数，把改变state的方法setShowLoading传入props中，
        这里当 useState 改变的时候，不会触发children的渲染
    2. 通过showLoading来显示 loading效果
*/

// TODO: 总结：

/* 
   1. 容器组件作用是传递状态，执行children 函数
   2. 外层组件可以根据容器组件回传props，进行props组合传递给子组件
   3. 外层组件可以使用容器组件回传的状态
*/

function Container({ children }) {
  const [showLoading, setShowLoading] = useState(false)
  const renderChildren = useMemo(
    () =>
      typeof children === 'function' ? children({ setShowLoading }) : null,
    [children]
  )
  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        background: 'gray',
      }}>
      {renderChildren}
      {showLoading && (
        <div className="mastBox">
          {<SyncOutlined className="icon" spin twoToneColor="#52c41a" />}
        </div>
      )}
    </div>
  )
}

// TODO: 外层使用

const RenderPropsDemo1 = () => {
  const setLoading = useRef(null)
  return (
    <div>
      <Container>
        {({ setShowLoading }) => {
          console.log('渲染')
          setLoading.current = setShowLoading
          return (
            <div>
              <div className="index1">
                <button onClick={() => setShowLoading(true)}>loading</button>
              </div>
            </div>
          )
        }}
      </Container>
      <button onClick={() => setLoading.current && setLoading.current(false)}>
        取消 loading
      </button>
    </div>
  )
}

export default RenderPropsDemo1
