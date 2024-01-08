const a = {
  val: 'a'
}

const b = {
  val: 'b'
}

const c = {
  val: 'c'
}

const d = {
  val: 'd'
}


a.next = b
b.next = c
c.next = d

// 遍历链表
let p = a


// 进行插入
const e = { val: 'e' }
c.next = e
e.next = d

while (p) {
  console.log(p.val)
  p = p.next
}


// TODO: 手写instanceOf

const myInstanceOf = (A, B) => {
  // 声明一个指针
  let p = A

  // 遍历这个链表
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

console.log(myInstanceOf([], Object))



