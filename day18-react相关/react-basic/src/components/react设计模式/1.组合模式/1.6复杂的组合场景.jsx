import React from 'react'

function Item(props) {
  return (
    <div>
      名称：{props.name} <br />
      作者：{props.author} <br />
      对大家说：{props.mes} <br />
    </div>
  )
}

/* 第二层组合 -> 混入 mes 属性 */

function Wrap(props) {
  return React.cloneElement(props.children, { mes: 'let us learn React!' })
}

/* 第一层组合： 里面进行二次组合，混入author属性 */

function Groups(props) {
  return <Wrap>{React.cloneElement(props.children, { author: 'alien' })}</Wrap>
}

const ComplixSenes = () => {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
    </Groups>
  )
}

export default ComplixSenes
