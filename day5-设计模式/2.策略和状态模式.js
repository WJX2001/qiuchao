// TODO: 策略模式基本结构

// 减少 if...else

function caculate(type, a, b) {
  const strategy = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    division: (a, b) => a / b,
    times: (a, b) => a * b,
  }

  return strategy[type](a, b)
}

console.log(caculate('add', 1, 1)) // 2

// TODO: 状态模式和策略模式很像，也是一个对象存储一些策略，但是还有一个变量来存储当前的状态，我们根据状态来获取具体的操作

// function stateFactor(state) {
//   const stateObj = {
//     status: '',
//     state: {
//       state1: function () {},
//       state2: function () {},
//     },
//     run: () => this.state[this.status],
//   }

//   stateObj.status = state
//   return stateObj
// }

// // 使用
// stateFactor('state1').run()

// TODO: 例子一 访问权限

// 有三个模块需要显示，不同角色看到的模块应该不同
// function showPart1() {}
// function showPart2() {}
// function showPart3() {}

// 将各种角色包装到 一个 ShowController 类里面
// function ShowController() {
//   this.role = ''
//   this.roleMap = {
//     boss: function () {
//       showPart1()
//       showPart2()
//       showPart3()
//     },
//     manager: function () {
//       showPart1()
//       showPart2()
//     },
//     staff: function () {
//       showPart3()
//     },
//   }
// }

// ShowController上添加一个实例方法show，用来根据角色展示不同的内容
// ShowController.prototype.show = function () {
//   axios.get('xxx').then((role) => {
//     this.role = role
//     this.roleMap[this.role]()
//   })
// }

// 使用时
// new ShowController().show()

// TODO: 交通信号灯的切换

/**
 * 红色 3秒
 * 黄色 2秒
 * 绿色 5秒
 */

const stateList = [
  { name: '红色', time: 3000 },
  { name: '黄色', time: 2000 },
  { name: '绿色', time: 5000 },
]

const total = stateList.reduce((pre, cur) => pre + cur['time'], 0)

async function changeColor() {
  console.log('开始循环')
  for (let i = 0; i < stateList.length; i++) {
    await new Promise((resolve) => {
      console.log(stateList[i].name)
      setTimeout(() => {
        resolve()
      }, stateList[i].time)
    })
  }
}

changeColor()

setInterval(async () => {
  changeColor()
}, total)
