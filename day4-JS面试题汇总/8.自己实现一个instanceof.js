// TODO: instanceof作用： 检查一个对象是不是某个类的实例，换句话说：检查一个对象的原型链上有没有这个类的prototype

function myInstanceof(targetObj, targetClass) {
  // base case 参数检查
  if (
    !targetObj ||
    !targetClass ||
    !targetObj.__proto__ ||
    !targetClass.prototype
  ) {
    return false
  }

  let current = targetObj

  while (current) {
    if (current.__proto__ === targetClass.prototype) {
      return true
    }
    // 一直往原型链上找
    current = current.__proto__
  }
  return false
}

//* 测试
function Parent() {}
function Child() {}
// 创建实例
const obj = new Child()

console.log(myInstanceof(obj, Child)) // true
console.log(myInstanceof(obj, Parent)) // true
console.log(myInstanceof({}, Parent)) // false
