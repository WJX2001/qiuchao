import React, { useState } from 'react'

function ChildComponent({ onMessage }) {
  const sendMessageToParent = () => {
    const message = 'Hello, 父组件!'
    onMessage(message) // 调用父组件传递的回调函数
  }

  return (
    <div>
      <h2>子组件</h2>
      <button onClick={sendMessageToParent}>发送消息给父组件</button>
    </div>
  )
}

const FatherAndSon = () => {
  const [message, setMessage] = useState('')

  // 子组件触发的回调函数
  const handleMessageFromChild = (childMsg) => {
    setMessage(childMsg)
  }
  return (
    <div>
      <h1>父组件</h1>
      <p>从子组件接收的消息：{message}</p>
      <ChildComponent onMessage={handleMessageFromChild} />
    </div>
  )
}

export default FatherAndSon
