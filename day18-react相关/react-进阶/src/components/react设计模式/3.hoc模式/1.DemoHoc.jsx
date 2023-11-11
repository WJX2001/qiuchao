import React from 'react'

// TODO: 本质是一个包装强化模式，高阶函数接收一个函数，返回一个函数

// 所谓高阶组件，就是接收一个组件，返回一个组件，返回的组件是根据需要对原始组件的强化

// TODO: hoc 通用模式

/* 
    1. HOC 本质是一个函数，传入Component 也就是原始组件本身
    2. 返回一个新的包装的组件Wrap，我们可以在Wrap 中做一些强化原始组件的事
    3. Wrap 中挂载原始组件本身 Component
*/
function Hoc(Component) {
  return class Wrap extends React.Component {
    // ----
    // 强化操作
    // --------

    render() {
      return <Component {...this.props} />
    }
  }
}

//! HOC 两种方式实现：属性代理和反向继承

// TODO: 属性代理
// * 用组件包裹一层代理组件，在代理组件中，可以做一些对源组件的代理操作，可以理解为父子组件的关系，父组件对子组件进行强化

/* 
  适用场景：1. 做一些开源项目的hoc，同样适用于 class 声明组件 和 function声明的组件
          2. 可以完全隔离业务组件的渲染，相比反向继承，属性代理这种模式，可以完全控制业务组件渲染与否，可以避免
              反向继承带来一些副作用，比如生命周期执行
          3. 可以嵌套执行
*/

function HOC(WrapComponent) {
  return class Advance extends React.Component {
    state = {
      name: '《React 进阶指南》',
      author: '我不是外星人',
    }

    render() {
      return <WrapComponent {...this.props} {...this.state} />
    }
  }
}

// TODO: 反向继承

/* 
    反向继承和属性代理有一定的区别：
        包装后的组件集成了业务组件本身，所以我们无须再去实例化业务组件
        该方式类似于组件的强化，所以必须知道当前继承的组件的状态
*/

class Index extends React.Component {
  render() {
    return <div> hello world</div>
  }
}

function HOC1(Component) {
  return class wrapComponent extends Component {
    /* 直接继承需要包装的组件 */
  }
}

const DemoHoc = () => {
  return <div>DemoHoc</div>
}

export default DemoHoc
