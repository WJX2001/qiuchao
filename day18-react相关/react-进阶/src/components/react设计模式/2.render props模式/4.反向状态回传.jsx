// TODO: 反向状态回传
/* 
  可以通过 render props中的状态，提升到当前组件中
  也就是将容器组件内的状态，传递给父组件
*/

import React, { useEffect, useRef } from 'react'

function GetContainer(props) {
  const dom = useRef()
  const getDom = () => dom.current
  console.log(props, '这是GetContainer的props.children')
  return <div ref={dom}>{props.children({ getDom })}</div>
}

// TODO: 代码解析：
/**
 * 在GetContainer将获取元素的方法 getDom 通过 render props 回传给父组件
 * ? 父组件 ReversePropsRender 通过 getDom 保存 render props 回传的内容，在 useEffect 调用 getDom方法
 * @returns
 */

const ReversePropsRender = () => {
  /* 保存 render props 回传的状态 */
  const getChildren = useRef(null)

  useEffect(() => {
    const childDom = getChildren.current()
    console.log(childDom, 'children')
  }, [])

  return (
    <GetContainer>
      {({ getDom }) => {
        getChildren.current = getDom
        return <div>拿到值了哦</div>
      }}
    </GetContainer>
  )
}

export default ReversePropsRender
