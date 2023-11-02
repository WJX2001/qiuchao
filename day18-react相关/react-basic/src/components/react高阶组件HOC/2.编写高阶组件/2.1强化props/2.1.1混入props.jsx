import React, { useEffect, useState } from 'react'

// TODO: 承接上层的props 在混入自己的props 来强化组件

// TODO: 有状态组件

function classHOC(WrapComponent) {
  return class Idex extends React.Component {
    state = {
      name: 'alien',
    }

    componentDidMount() {
      console.log('HOC')
    }

    render() {
      return <WrapComponent {...this.props} {...this.state} />
    }
  }
}

// 使用hooks 写法
function HooksHOC(WrapComponent) {
  return function IdexTmp(props) {
    const [name, setName] = useState('wjx')

    useEffect(() => {
      console.log('HOC')
    }, [])
    return <WrapComponent {...props} name={name} />
  }
}

// 通用组件
function Index(props) {
  const { name } = props

  useEffect(() => {
    console.log('index')
  }, [])

  return <div>hello world,my name is {name}</div>
}

// 使用类组件
const NewClassIndex = classHOC(Index)

// 使用函数组件
const NewHookIndex = HooksHOC(Index)

export default NewHookIndex
