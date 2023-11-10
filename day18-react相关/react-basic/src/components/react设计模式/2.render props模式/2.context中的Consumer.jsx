import React from 'react'

// TODO: render props 在 Consumer 模式中的体现

const Context = React.createContext(null)

function Index() {}

const ContextConsumer = () => {
  return <div>ContextConsumer</div>
}

export default ContextConsumer
