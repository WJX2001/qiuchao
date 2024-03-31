// TODO: 实现一个发布-订阅模式

/**
 * TODO: 实现思路：
 *   1. 创建一个对象
 *   2. 在该对象上创建一个调度中心
 *   3. on 方法用来把函数fn都加到缓存列表中（订阅着注册事件到调度中心）
 *   
 */


// 公众号调度中心
class EventHub {
  constructor() {
    // 缓存列表 存放event 及 fn
    this.map = {}
  }

  on(event,fn) {
    // 如果对象中没有对应的 event值，也就是没有订阅过，就给这个event创建个缓存列表
    this.map[event] = this.map[event] || []
    // 把fn 添加到对应event 的缓存队列中
    this.map[event].push(fn)
  }

  emit(event,data) {
    const fnList = this.map[event] || []
    if(!fnList || fnList.length === 0) return 
    // 否则遍历event 值对应的缓存列表 依次执行fn
    fnList.forEach((fn) => fn.call(undefined,data))
  }

  off(event,fn) {
    const fnList = this.map[event] || []
    const index = fnList.indexOf(fn)

    // 如果缓存列表里没有要找的fn 就return 
    if(index <0) return 
    fnList.splice(index,1)
  }

  once(event,fn) {
    const f = (data) => {
      fn(data)
      this.off(event,f)
    }
    this.on(event,f)
  }
}

// 举例说明
function user1 (content) {
  console.log('用户1订阅了:', content);
};

function user2 (content) {
  console.log('用户2订阅了:', content);
};


function user3 (content) {
  console.log('用户3订阅了:', content);
}

function user4 (content) {
  console.log('用户4订阅了:', content);
}



