import React from 'react'

// TODO: 修改渲染状态（劫持render替换子节点）

class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>Angular</li>
        </ul>
      </div>
    )
  }
}

function HOC(Component) {
  return class Advance extends Component {
    render() {
      const element = super.render()
      const otherProps = {
        name: 'alien',
      }

      // 替换Angular 元素节点
      const appendElement = React.createElement(
        'li',
        {},
        `hello,world , my name  is ${otherProps.name}`
      )

      const newchild = React.Children.map(
        element.props.children.props.children,
        (child, index) => {
          if (index === 2) return appendElement
          return child
        }
      )

      return React.cloneElement(element, element.props, newchild)
    }
  }
}

export default HOC(Index)
