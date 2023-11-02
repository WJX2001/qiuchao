// TODO: 老版本的react-mixins

import React from 'react'

const customMixin = {
  componentDidMount() {
    console.log('------componentDidMount------')
  },
  say() {
    console.log(this.state.name)
  },
}

const ReactMixin = React.createClass({
  mixins: [customMixin],
  getInitialState() {
    return {
      name: 'alien',
    }
  },
  render() {
    const { name } = this.state
    return <div> hello ,world , my name is {name} </div>
  },
})

export default ReactMixin
