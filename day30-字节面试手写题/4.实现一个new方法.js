function myNew (Func, ...args) {
  let obj = {}

  obj.__proto__ = Func.prototype

  let res = Func.apply(obj, args)

  return res instanceof Object ? res : obj
}

function Person (name, age) {
  this.name = name
  this.age = age
  // return {sex: 'female'} // 如果返回一个对象就正常返回
}


Person.prototype.say = function () {
  console.log(this.name)
}

let p = myNew(Person, "huihui", 123)
console.log(p) // Person {name: "huihui", age: 123}
p.say() // huihui