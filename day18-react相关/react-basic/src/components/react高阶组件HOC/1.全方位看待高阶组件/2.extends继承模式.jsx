import React from 'react'
class Base extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'alien',
    }
  }
  say() {
    console.log('base components')
  }

  render() {
    return (
      <div>
        hello,world <button onClick={this.say.bind(this)}>点击</button>
      </div>
    )
  }
}

class ExtendsIndex extends Base {
  componentDidMount() {
    console.log(this.state.name)
  }

  say() {
    console.log('extends components')
  }
}

export default ExtendsIndex
