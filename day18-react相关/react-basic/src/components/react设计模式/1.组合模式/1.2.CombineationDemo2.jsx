import React from 'react'

function Item(props) {
  return <div>{props.name}</div>
}

// TODO: 针对Groups 包含多个组件的情况
function Groups(props) {
  console.log(props.children)
  const propsChildArr = props.children
  // 当有多个子组件的时候，此时props.children 是一个数组结构，需要访问每一个props 需要通过React.Children.forEach遍历
  React.Children.forEach(propsChildArr, (item) => {
    console.log(item.props) // 依次打印props
  })

  return props.children
}

const CombineationDemo2 = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
      <Item name="《Nodejs深度学习手册》" />
    </Groups>
  )
}

export default CombineationDemo2
