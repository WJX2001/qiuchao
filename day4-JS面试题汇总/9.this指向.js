// TODO: this妙用：当要求只能通过new调用的还是直接调用

function Vue(options) {
  if (!this instanceof Vue) {
    warn('Vue is a constructor and shoul be called with the new keyword')
  }
}

// TODO: 没有明确调用者 this 指向 window
function func() {
  function func2() {
    console.log('this:', this) // window
  }
  func2()
}
func()

// TODO: 无论是直接执行，还是使用new执行，this的值都指向 window
function func() {
  function func2() {
    console.log('this:', this) // window
  }
  func2()
}

new func()
