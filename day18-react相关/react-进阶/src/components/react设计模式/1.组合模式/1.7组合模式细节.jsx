// TODO: 细节注意：组合模式有很多细节需要注意

/* 
  组合模式注意细节：
    1. 对于children的类型校验，因为组合模式，外层容器对于children的属性状态是未知的，如果直接挂载，可能会出现报错    
*/

// TODO: 验证children
import React from 'react'

function Item(props) {
  return <div>{props.name}</div>
}

// function Groups(props) {
//   console.log(props.children)
//   return props.children
// }

//! 这种情况会报错 Functions are not valid as a React child
// 因为里面是函数

// 应该在Groups做判断，才能解决这种情况

function Groups(props) {
  return React.isValidElement(props.children)
    ? props.children
    : typeof props.children === 'function'
    ? props.children()
    : null
}

const ComplixDetail = () => {
  return <Groups>{() => <Item isShow name="《React进阶实践指南》" />}</Groups>
}

export default ComplixDetail
