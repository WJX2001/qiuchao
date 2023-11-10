// TODO: hoc 可以配合hooks的 useMemo等API 配合使用，减少渲染次数
import React, { useState } from 'react'
import { useMemo } from 'react'

// * 期望当且仅当num 改变的时候，渲染组件，但是不影响接收props

// TODO: 只有点击 num++的时候，才重新渲染子组件，点击其他按钮，只是负责传递 props
function HOC(Component) {
  return function RenderWrapComponent(props) {
    const { num } = props
    const RenderElement = useMemo(() => <Component {...props} />, [num])
    return RenderElement
  }
}

class Index extends React.Component {
  render() {
    console.log(`当前组件是否渲染`, this.props)
    return <div>hello world,my name is alien</div>
  }
}

const IndexHoc = HOC(Index)

const Debounce = () => {
  const [num, setNumber] = useState(0)
  const [num1, setNumber1] = useState(0)
  const [num2, setNumber2] = useState(0)

  return (
    <div>
      <IndexHoc num={num} num1={num1} num2={num2} />
      <button onClick={() => setNumber(num + 1)}>num++</button>
      <button onClick={() => setNumber1(num1 + 1)}>num1++</button>
      <button onClick={() => setNumber2(num2 + 1)}>num2++</button>
    </div>
  )
}

export default Debounce
