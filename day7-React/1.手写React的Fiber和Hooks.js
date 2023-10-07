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

// TODO: Fiber 架构，需要解决两个问题：
/**
 * 1、新的任务调度，有高优先级任务的时候将浏览器让出来，等浏览器空了再继续执行
 * 2、新的数据结构，可以随时中断，下次进来可以接着执行
 */

//* 这里需要用到 requestIdleCallback
/**
 * 进行任务调度，进行任务调度的思想将任务拆分成多个小任务，requestIdleCallback里面不断的将任务
 * 拿出来执行，当所有任务都执行完或者超时了就结束本次执行，同时要注册下次执行
 *  */

// TODO: Fiber 架构新加入了三个指针
/**
 * child：父节点指向第一个子元素的指针
 * sibling：从第一个子元素往后，指向下一个兄弟元素
 * return：所有子元素都有的指向父元素的指针
 */

//* 有了这几个指针，可以在任意一个元素中断遍历并恢复

// performUnitOfWork用来执行任务，参数是我们当前fiber任务，返回值是下一个任务
function performUnitOfWork(fiber) {
  // 根节点的dom就是container，如果没有这个属性，说明当前fiber不是根节点
  if (!fiber.dom) {
    fiber.dom = createDom(fiber) // 创建一个DOM 挂载上去
  }

  // 如果有父节点，将当前节点挂载到父节点上
  if (fiber.return) {
    fiber.return.dom.appendChild(fiber.dom)
  }

  // 将我们前面的vDom结构转换为fiber结构
  const elements = fiber.children
  let preSibling = null
  if (elements && elements.length) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const newFiber = {
        type: element.type,
        props: element.props,
        return: fiber,
        dom: null,
      }

      // 父级的child指向第一个子元素
      if (i === 0) {
        fiber.child = newFiber
      } else {
        preSibling.sibling = newFiber
      }

      preSibling = fiber
    }
  }

  // 这个函数的返回值是下一个任务，是一个深度优先遍历
  // 先找子元素，没有子元素了就找兄弟元素
  // 兄弟元素也没有了就返回父元素
  // 然后再找这个父元素的兄弟元素
  // 最后到根节点结束
  // 遍历顺序就是从上到下，从左到右

  if (fiber.child) {
    return fiber.child
  }

  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }

    nextFiber = nextFiber.return
  }
}

// TODO: 统一commit DOM 操作

/**
 * performUnitOfWork一边构建Fiber结构，一边操作DOM appendChild，如果某次更新好几个节点，操作了
 * 第一个节点之后就中断了，我们可能只看到第一个节点渲染到了页面，后序几个节点等浏览器空了才陆续渲染
 * 所以我们将DOM操作都搜集起来，最后统一执行
 */
