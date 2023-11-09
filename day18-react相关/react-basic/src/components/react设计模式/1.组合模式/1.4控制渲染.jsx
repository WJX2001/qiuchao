// TODO: 控制渲染，可以通过children方式获取内层组件，也可以根据内层组件的状态来控制其渲染

/* 根据内层组件的状态来控制渲染 */

// TODO: 需求： 只渲染 isShow = true 的 Item组件

import React, { isValidElement } from 'react'

function Item(props) {
  return <div>名称：{props.name}</div>
}

/* Groups组件 */

/**
 *
 * isValidElement 排除非element 节点
 * type 指向 Item 函数内存 排除非Item 元素
 * props 获取isShow属性 将存在此属性的节点推入数组
 * @returns
 */
function Groups(props) {
  const newChildren = []
  React.Children.forEach(props.children, (item) => {
    const { type, props } = item || {}

    if (isValidElement(item) && type === Item && props.isShow) {
      newChildren.push(item)
    }
  })
  return newChildren
}

const ControlRender = () => {
  return (
    <Groups>
      <Item isShow name="《React进阶实践指南》" />
      <Item isShow={false} name="《Nodejs深度学习手册》" />
      <div>hello,world</div>
    </Groups>
  )
}

export default ControlRender
