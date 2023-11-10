import React from 'react'

// TODO: render props 在 Consumer 模式中的体现

const Context = React.createContext(null)

function Index() {
  return (
    // TODO: Consumer 就是一个容器组件，包装即将渲染的内容

    /* 
      通过 children render 函数执行把状态 contextValue 从下游向上游提取
    */

    <Context.Consumer>
      {(contextValue) => (
        <div>
          名称：{contextValue.name}
          作者: {contextValue.author}
        </div>
      )}
    </Context.Consumer>
  )
}

const ContextConsumer = () => {
  const value = {
    name: '《React进阶实践指南》',
    author: '我不是外星人',
  }

  return (
    <Context.Provider value={value}>
      <Index />
    </Context.Provider>
  )
}

export default ContextConsumer
