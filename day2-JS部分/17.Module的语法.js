// TODO:  commmonJS和AMD模块 都只能在运行时确定这些东西

// CommonJs模块就是对象 输入时必须查找对象属性

// CommonJS 模块
let { stat, exists, readfile } = require('fs')

// 等同于
let _fs = require('fs')
let stat = _fs.stat
let exists = _fs.exists
let readfile = _fs.readfile

/**
 * 本质是整体加载fs模块，加载fs的所有方法，生成一个对象_fs，然后从这个对象上读取3个方法，这种加载被称为【运行时加载】
 * 因为只有运行时才能得到这个对象，导致完全没办法在编译时做静态优化
 */


// TODO: ES6模块是编译时加载，使得静态分析称为可能，拓宽了JS的语法，例如宏和类型检验 这些只能靠静态分析实现的功能

import { wjx, xjc, } from 'fs'
// 上main代码实质从fs模块加载了3个方法 其他方法不加载，这种加载称为编译时加载或者静态加载，即ES6可以在编译时就完成模块加载 效率比CommonJS模块的加载方式高


// TODO: 严格模式： ES6模块自动采用严格模式 

// TODO: 模块功能主要由两个命令构成：export和import，export命令规定模块的对外接口，import命令用于输入其他模块提供的功能

// TODO: export 命令规定的是对外的接口，必须与模块你饿不的变量建立一一对应关系

// 报错
// export 1  // 直接输出1

// 报错
// var m = 1
// export m  // 通过变量 m 还是直接输出1 不是接口

// 正确写法1
export var m = 1

// 正确写法2
var m = 1
export { m }

// 正确写法3
var n = 1
export { n as m } // 在接口名与模块内部变量之间，建立了一一对应的关系

// 报错
function f () { }
// export f  // 报错 因为f是一个函数 不是接口

// 正确写法
export function f () { }

// 正确
function f () { }
export { f }

