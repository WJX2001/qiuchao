import React from 'react'

// TODO: render props 注意问题是对children的校验，

function Container(props) {
  const renderChildren = props.children
  return typeof renderChildren === 'function'
    ? renderChildren({ name: '《React进阶实践指南》' })
    : null
}

// TODO: 判断children 是一个函数，如果是函数，那么执行函数，传递props
const RenderPropsAttention = () => {
  return <Container>{(props) => <div>名称：{props.name}</div>}</Container>
}

export default RenderPropsAttention
