import React from 'react'

class App1 extends React.Component {
  state = { val: 0 }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val, '第一次打印')
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val, '第二次打印')
    setTimeout((_) => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val, '第三次打印')
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val, '第四次打印')
    }, 0)
  }
  render() {
    return <div>{this.state.val}</div>
  }
}

export default App1
