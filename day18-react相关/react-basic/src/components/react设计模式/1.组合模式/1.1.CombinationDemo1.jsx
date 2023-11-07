import React from 'react'

function Item(props) {
  return <div>{props.name}</div>
}

function Groups(props) {
  console.log(props.children, '这是props.children') // Groups element
  console.log(props.children.props, '这是props.children.props') // { name : 'React进阶实践指南》' }
  return props.children
}

const CombinationDemo1 = () => {
  return (
    <>
      <Groups>
        <Item name="《React进阶实践指南》"></Item>
      </Groups>
    </>
  )
}

export default CombinationDemo1
