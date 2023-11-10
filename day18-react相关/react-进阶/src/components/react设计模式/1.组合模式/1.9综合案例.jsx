// TODO: 总结来说：组合模式内容如下：
/* 
    1. 组合模式通过外层组件获取内层组件children 通过cloneElement 传入新的状态，或者控制内层组件渲染
    2. 组合模式还可以和其他组件组合，或者是render props 拓展性很强
*/

import React, { useRef, useState } from 'react'
import './app.css'
const Tabs = (props) => {
  const { children, onChange } = props
  const activeIndex = useRef(null)
  const [, forceUpdate] = useState({})

  // 提供给tab 使用
  const tabList = []

  // 待渲染组件
  let renderChildren = null

  React.Children.forEach(children, (item) => {
    // 验证是否是 <TabItem>组件
    if (React.isValidElement(item) && item.type.displayName === 'tabItem') {
      const { props } = item
      const { name, label } = props
      const tabItem = {
        name,
        label,
        active: name === activeIndex.current,
        component: item,
      }
      // 当名称为当前索引的时候 待渲染组件就为当下循环到的这个组件
      if (name === activeIndex.current) renderChildren = item
      tabList.push(tabItem)
    }
  })

  //? 第一次加载的场景
  if (!renderChildren && tabList.length > 0) {
    const firstChildren = tabList[0]
    renderChildren = firstChildren.component
    activeIndex.current = firstChildren.component.props.name
    firstChildren.active = true
  }

  //? 切换tab
  const changeTab = (name) => {
    activeIndex.current = name
    forceUpdate({})
    // 打印一下内容 onChange为传入的函数
    onChange && onChange(name)
  }

  return (
    <div>
      <div className="header">
        {tabList.map((tab, index) => (
          <div
            className="header_item"
            key={index}
            onClick={() => changeTab(tab.name)}>
            <div className={'text'}>{tab.label}</div>
            {tab.active && <div className="active_bored"></div>}
          </div>
        ))}
      </div>
      <div>{renderChildren}</div>
    </div>
  )
}
Tabs.displayName = 'tab'

const TabItem = ({ children }) => {
  return <div>{children}</div>
}
TabItem.displayName = 'tabItem'

const ComprehensiveDemo = () => {
  return (
    <Tabs onChange={(type) => console.log(type)}>
      <TabItem name="react" label="react">
        React
      </TabItem>
      <TabItem name="vue" label="vue">
        Vue
      </TabItem>
      <TabItem name="angular" label="angular">
        Angular
      </TabItem>
    </Tabs>
  )
}
export default ComprehensiveDemo
