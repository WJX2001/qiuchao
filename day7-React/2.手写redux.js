// TODO: Store
//* 是一个仓库，存储了所有的状态，后序的操作都是操作这个仓库

// TODO: Actions
//* 一个Action就是一个动作，这个动作的目的是更改Store中的某个状态，Store还是上面的那个仓库

// TODO: Reducers
//* 前面的Action只是想法，还没有操作，具体操作要靠Reducer,根据Action来改变Store中状态

// const initState = {
//   milk: 0,
// }

// function reducer(state = initState, action) {
//   switch (action.type) {
//     case 'PUT_MILK':
//       return { ...state, milk: state.milk + action.count }
//     default:
//       return state
//   }
// }

// Redux 本身就是一个状态机，Store存放了所有的状态，Action是一个改变状态的通知，
// Reducer接收到通知就更改Store中对应的状态

// TODO: 简单例子

// TODO: 自我实现
//* 订阅者发布者模式
/**
 * store.subscribe：订阅state的变化，当state变化的时候执行回调，可以有多个subscribe，里面的回调依次执行
 */

const initState = {
  milk: 0,
}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'PUT_MILK':
      return { ...state, milk: state.milk + action.count }
    case 'TAKE_MILK':
      return { ...state, milk: state.milk - action.count }
    default:
      return state
  }
}

function createStore(reducer) {
  let state // 记录所有的状态
  let listeners = [] // 保存所有注册的回调

  function subscribe(callback) {
    listeners.push(callback)
  }

  // dispatch 就是将所有的回调拿出来依次执行
  function dispatch(action) {
    state = reducer(state, action)

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  // getState 直接返回state
  function getState() {
    return state
  }

  const store = {
    subscribe,
    dispatch,
    getState,
  }
  return store
}

// TODO: 测试
let store = createStore(reducer)

// subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => console.log(store.getState()))

// 将action发出去要用dispatch
store.dispatch({ type: 'PUT_MILK' }) // milk: 1
store.dispatch({ type: 'PUT_MILK' }) // milk: 2
store.dispatch({ type: 'TAKE_MILK' }) // milk: 1
