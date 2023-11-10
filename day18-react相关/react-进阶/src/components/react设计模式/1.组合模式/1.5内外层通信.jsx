// TODO: 内外层通信原理：通过外层组件，向内层组件传递回调函数callback，内层通过调用callback

import React from 'react'

function Item(props) {
  return (
    <div>
      名称: {props.name}
      <button onClick={() => props.callback('let us learn React')}>点击</button>
    </div>
  )
}

function Groups(props) {
  const handleCallback = (val) => console.log('children 内容', val)
  return (
    <div>
      {React.cloneElement(props.children, { callback: handleCallback })}
    </div>
  )
}

const Communacation = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
    </Groups>
  )
}

export default Communacation
