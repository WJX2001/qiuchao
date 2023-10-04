// TODO: 手写createElement

// * 需要返回的数据结构
// <h1 id="title">Title</h1>
// {
//   type: 'h1',
//   props: {
//     id: 'title',
//     children: 'Title'
//   }
// }

/**
 * 有了这个数据结构之后，对于Dom的操作可以转化为对这个数据结构的操作，新老DOM的对比其实也可以转化为这个数据结构的对比
 * 这样我们就不需要每次都序渲染页面，而是等到需要渲染的时候才将这个数据结构渲染到页面上，这就是虚拟DOM
 * createElement 就是负责构建这个虚拟DOM的方法
 */

function createElement(type, props, ...children) {
  // 核心逻辑不复杂，将参数都塞到一个对象上返回
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}

// TODO: 手写render
/**
 * 使用createElement将JSX代码转换成了虚拟DOM，那真正将它渲染到页面的函数是render
 * 一般用法：ReactDOM.render( <App />,document.getElementById('root'));
 * 可以知道他接收两个参数：
 *  1、根组件，其实是一个JSX组件，也就是一个createElement返回的虚拟DOM
 *  2、父节点，也就是我们要将这个虚拟DOM渲染的位置
 */

function render(vDom, container) {
  let dom
  // 检查当前节点是文本还是对象
  if (typeof vDom !== 'object') {
    dom = document.createTextNode(vDom)
  } else {
    dom = document.createElement(vDom.type)
  }

  // 将vDom上除了children外的属性都挂载到真正的DOM上去
  if (vDom.props) {
    Object.keys(vDom.props)
      .filter((key) => key !== 'children')
      .forEach((item) => {
        dom[item] = vDom.props[item]
      })
  }

  // 如果还有子元素，递归调用
  if (vDom.props && vDom.props.children && vDom.props.children.length) {
    vDom.props.children.forEach((child) => render(child, dom))
  }

  container.appendChild(dom)
}
