import React from 'react'

function HOC(Component) {
  return class wrapComponent extends React.Component {
    constructor() {
      super()
      this.state = {
        name: 'alien',
      }
    }
    render = () => <Component {...this.props} {...this.state} />
  }
}

class HocIndex extends React.Component {
  say() {
    const { name } = this.props
    console.log(name)
  }

  render() {
    return (
      <div>
        hello world <button onClick={this.say.bind(this)}>点击</button>
      </div>
    )
  }
}

export default HocIndex
