// TODO: 实现一个instanceof 方法

function myInstanceof(left,right) {
  // 定义右边的原型
  let tmpRight = right.prototype

  left = left.__proto__
  while(true) {
    if(left === null ) {
      return false
    }
    if(left === tmpRight) {
      return true
    }
    left = left.__proto__
  }
}

// TODO: 测试用例

var a = []
var b = {}

function Foo() {

}

var c = new Foo()

function child() {}
function father() {}

child.prototype = new father()

var d = new child()


console.log(myInstanceof(a,Array)) 










