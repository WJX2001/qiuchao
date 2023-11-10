import React from 'react'

const Container = (props) => {
  return props.children
}

const Children = (props) => {
  return <div>{props}</div>
}

const RenderPropsDemo1 = () => {
  const aProps = {
    name: '《React 进阶实践指南》',
  }

  // TODO: 参数详情
  /* 
    其中 cProps 为 Container 组件提供的状态
        aProps 为 App 提供的状态
  */

  return (
    <Container>{(cProps) => <Children {...cProps} {...aProps} />}</Container>
  )
}

export default RenderPropsDemo1
