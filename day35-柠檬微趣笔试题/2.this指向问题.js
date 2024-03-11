/* 
  this 工作原理错误的是 ：
    A、对象函数调用时指向当前对象 
    B、全局函数调用时指向全局函数 
    C、在全局范围内 this指向全局对象 
    D、使用new实例化对象时 this指向新创建的对象
*/

// TODO: B 错误 函数使用中 this指向函数的所有者（严格模式下：函数是没有绑定到this上，这时候this未定义 undefined）

// TODO: this 方法详解：

/**
 *  1、在对象方法中，this表示该方法所属的对象(this指向调用它所在方法的对象)
 *  2、如果单独使用this表示全局对象，非严格模式下（node环境下：Global; 浏览器：Window）
 *  3、在函数使用中，this指向函数的所属者（严格模式下：函数是没有绑定到this上，这时候this是未定义的undefined）
 *  4、在事件中，this表示接收事件的元素（在HTML事件句柄中，this指向了接收事件的HTML元素）
 *  5、类似call()和apply方法可以将this引用到任何对象中
 */

// TODO: 终极秘籍：

/**
 *  1、如果一个函数中有this，但是它没有被上一级的对象所调用 this指向window (严格除外)
 *  2、如果一个函数中有this，这个函数有被上一级的对象所调用 那么this指向的就是上一级的对象
 *  3、如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
 */

// TODO: 举例说明

function a () {
  var user = '阳光明媚'
  console.log(this.user) // undefined
  console.log(this) // Window
}
a()
// window.a() // 效果相同







function fn () {
  this.user = '阳光明媚'
  return function () { }
}
var a = new fn()
console.log(a.user)



console.log('----------分割线----------')

let tmpFunc = function() {
  console.log(this.name)
}

let tmpObj = {
  name: '',
  tmpFunc
}

tmpFunc()  // 方法一
tmpObj.tmpFunc()  // 方法二