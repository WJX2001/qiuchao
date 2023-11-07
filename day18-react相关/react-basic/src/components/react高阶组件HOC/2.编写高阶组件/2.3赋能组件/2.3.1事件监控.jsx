import React, { useEffect, useRef } from 'react'

// TODO: 组件內的事件监听

// * 实现功能：对组件內的点击事件做一个监听效果

function ClickHoc(Component) {
  return function Wrap(props) {
    const dom = useRef(null)
    useEffect(() => {
      const handerClick = () => console.log('发生点击事件')
      dom.current.addEventListener('click', handerClick)
      return () => dom.current.removeEventListener('click', handerClick)
    }, [])
    return (
      <div ref={dom}>
        <Component {...props} />
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <p>hello，world</p>
        <button>组件内部点击</button>
      </div>
    )
  }
}

const EventListenerHoc = () => {
  return (
    <div>
      <Index />
      <button>组件外部点击</button>
    </div>
  )
}

export default EventListenerHoc
