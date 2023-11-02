import React from 'react'

// TODO: 所谓正向属性代理，就是用组件包裹上一层代理组件，可以对源组件的代理操作

/**
 * 缺点：
 *    1. 一般无法直接获取业务组件的状态，如果想要获取，需要ref获取组件实例
 *    2. 无法直接继承静态属性，如果需要继承需要手动处理
 */

class Index extends React.Component {
  render() {
    return <div>hello world</div>
  }
}

Index.say = function () {
  console.log('my name is alien')
}

function ForwardProxy(Component) {
  return class wrapComponent extends React.Component {
    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
}

const NewIndex = ForwardProxy(Index)
console.log(NewIndex.say) // undifined 因为无法继承静态属性

export default NewIndex
