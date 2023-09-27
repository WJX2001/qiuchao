// TODO: 发布订阅模式

// * 基本概念
/**
 *  是一种一对多的依赖关系，当一个对象的状态发生改变的时候，所有依赖他的对象都会得到状态改变的通知
 *  1、消息中心：负责存储消息与订阅者的对应关系，有消息时触发，负责通知订阅者
 *  2、订阅者：去消息中心订阅自己感兴趣的消息
 *  3、发布者：满足条件时，通过消息中心发布消息
 *
 */

class PubSub {
  constructor() {
    // 一个对象存放所有的消息订阅
    // 每个消息对应一个数组，数组结构如下
    // {"event1":[cb1,cb2]}

    this.events = {}
  }

  // 订阅
  subscribe(event, callback) {
    if (this.events[event]) {
      // 如果有人订阅过了，这个键已经存在，直接往数组里面加就好了
      this.events[event].push(callback)
    } else {
      // 没人订阅过，就建一个数组，回调放进去
      this.events[event] = [callback]
    }
  }

  // 发布
  publish(event, ...args) {
    // 取出所有订阅者的回调执行
    const subscribedEvents = this.events[event]
    if (subscribedEvents && subscribedEvents.length) {
      subscribedEvents.forEach((callback) => {
        callback.call(this, ...args)
      })
    }
  }

  // 删除某个订阅 保留其他订阅
  unsubscribe(event, callback) {
    // 保留其他订阅
    const subscribeEvents = this.events[event]
    if (subscribeEvents && subscribeEvents.length) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback)
    }
  }
}

//TODO: 测试环节

const pubsub = new PubSub()

// 创建订阅者
function subscriber1(data) {
  console.log('Subscriber 1 received data:', data)
}

function subscriber2(data) {
  console.log('Subscriber 2 received data:', data)
}

// 订阅事件
pubsub.subscribe('event1', subscriber1)
pubsub.subscribe('event2', subscriber2)

// 创建发布者并发布消息
function publisher() {
  console.log('Publisher is publishing data...')
  pubsub.publish('event1', 'Hello from Publisher to event1')
  pubsub.publish('event2', 'Hello from Publisher to event2')
}

// 发布消息
publisher()

// 删除一个订阅者
pubsub.unsubscribe('event1', subscriber1)

// 再次发布消息
publisher()

// TODO: 观察者模式
//* 基本概念：定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新

class Subject {
  constructor() {
    this.observerList = []
  }

  addObserver(observer) {
    this.observerList.push(observer)
  }

  removeObserver(observer) {
    const index = this.observerList.findIndex((i) => i.name === observer.name)
    this.observerList.splice(index, 1)
  }

  notifyObservsers(message) {
    const observers = this.observerList
    observers.forEach((observer) => observer.notified(message))
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    if (subject) {
      subject.addObserver(this)
    }
  }

  notified(message) {
    console.log(this.name + ' get message: ' + message)
  }
}

// 创建被观察者
const subject = new Subject()

// 创建观察者

// 方式一
const observerA = new Observer('ObserverA', subject)

// 方式二
const observerB = new Observer('ObserverB')
subject.addObserver(observerB)

// 被观察者通知 观察者
subject.notifyObservsers('hello from subject')

subject.removeObserver(observerA)
subject.notifyObservsers('Hello again, A被移除了')
