import React from 'react'

// TODO: createHoc 写法

function createHoc() {
  const renderQueue = [] // 待渲染队列
  return function Hoc(Component) {
    // 渲染控制器
    function RenderController(props) {
      /* RenderController 用于挂载原始组件 */
    }

    return class Wrap extends React.Component {
      constructor() {
        super()
        this.state = {
          isRender: false,
        }

        const tryRender = () => {
          this.setState({
            isRender: true,
          })
        }
      }
    }
  }
}

const HocDemo = () => {
  return <div>HocDemo</div>
}

export default HocDemo
