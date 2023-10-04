import React from 'react'

class ClassDemo extends React.Component {
  state = {
    value: '',
  }

  showMessage = () => {
    alert('最新值为 ' + this.state.value)
  }

  handleMessageChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleMessageChange} />
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}
export default ClassDemo
