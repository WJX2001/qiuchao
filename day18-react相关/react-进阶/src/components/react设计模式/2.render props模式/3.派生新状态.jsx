import React from 'react'

const Container = (props) => {
  return props.children
}

const Children = (props) => {
  return <div>{props}</div>
}

const getNewProps = (...params) => {
  return [...params]
}

// TODO: 相比传统的组合模式，render props 可以通过容器组件的状态和当前组件的状态结合，派生出新的状态

const RenderPropsNewStatus = () => {
  return <Container>{(cProps) => {}}</Container>
}

export default RenderPropsNewStatus
