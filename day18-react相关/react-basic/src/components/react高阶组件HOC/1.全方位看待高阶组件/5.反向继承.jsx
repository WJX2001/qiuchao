import React from 'react'

// TODO: 反向继承：在于包装后的组件集成了业务组件本身，所以无须在去实例化我们的业务组件

/**
 * 当前方法高阶组件就是继承后，加强型的业务组件，这种方式类似于组件的强化
 * 优点：
 *   1. 方便获取组件内部状态，比如state,props，生命周期，绑定的事件函数等
 *   2. es6继承可以良好继承静态属性，无须对静态属性和方法进行额外的处理
 */

/**
 * 缺点：
 *   1. 无状态组件无法使用
 *   2. 如果多个反向继承hoc嵌套在一起，当前状态会覆盖上一个状态
 */

class Index extends React.Component {
  render() {
    return <div>hello world</div>
  }
}

Index.say = function () {
  console.log('my name is alien')
}

function HOC(Component) {
  return class wrapComponent extends Component {}
}

const ReverseProxy = HOC(Index)
console.log(ReverseProxy.say)

export default ReverseProxy
