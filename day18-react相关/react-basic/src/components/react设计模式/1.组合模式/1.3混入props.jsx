import React from 'react'

// TODO: 隐式混入 props

/* 
  组合模式的精髓： 
    通过React.cloneElement 向 children中混入其他的props 
    那么子组件就可以使用容器父组件提供的特有的props             
*/

function Item(props) {
  console.log(props)
  return <div>名称：{props.name}</div>
}

function Groups(props) {
  const newChildren = React.cloneElement(props.children, { author: 'wjx' })
  return newChildren
}

const MixinProps = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
    </Groups>
  )
}

export default MixinProps
