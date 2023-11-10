import React, { useState } from 'react'

// TODO: 抽离state控制更新

function classHOC(WrapComponent) {
  return class Index extends React.Component {
    constructor() {
      super()
      this.state = {
        name: 'alien',
      }
    }

    changeName(name) {
      this.setState({ name })
    }

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          changeName={this.changeName.bind(this)}
        />
      )
    }
  }
}

// TODO: 使用 Hooks 改写
function useHOC(WrapComponent) {
  return function Index(props) {
    const [name, setName] = useState('wjx')

    function changeName(newName) {
      setName(newName)
    }

    return <WrapComponent {...props} name={name} changeName={changeName} />
  }
}

function Index(props) {
  const [value, setValue] = useState(null)
  const { name, changeName } = props

  return (
    <div>
      <div>hello world,my Name is {name}</div>
      改变 name <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => changeName(value)}>确定</button>
    </div>
  )
}

const NewStateIndex = classHOC(Index)

export default NewStateIndex
