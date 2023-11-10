// TODO: 绑定静态属性

/*
  在外部组件的视角下，如何证明是内部组件，统一使用 displayName来标记组件的身份
  
*/
import React, { isValidElement } from 'react'

function Item(props) {
  return <div>{props.name}</div>
}
// TODO: 绑定静态属性 让其拥有可以被识别的属性
Item.displayName = 'Item'

function Text(props) {
  return <div>我是Text</div>
}

function Groups(props) {
  const newChildren = []
  console.log(props.children)
  React.Children.forEach(props.children, (item) => {
    const { type, props } = item || {}
    if (isValidElement(item) && type.displayName === 'Item') {
      newChildren.push(item)
    }
  })
  return newChildren
}

const BindStatic = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
      <Text />
    </Groups>
  )
}

export default BindStatic
