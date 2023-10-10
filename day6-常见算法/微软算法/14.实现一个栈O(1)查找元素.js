class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    this.stack.push(val)
    // 如果最小栈为空 或新的值小于等于当前的最小值，则将新的值入最小栈
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val)
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return
    }

    // 如果弹出的元素等于当前最小值 也从最小栈中弹出来
    if (this.stack.length === 0) {
      return
    }

    if (
      this.stack[this.stack.length - 1] ===
      this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.pop()
    }
    this.stack.pop()
  }

  top() {
    if (this.stack.length === 0) {
      return undefined
    }
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    if (this.minStack.length === 0) {
      return undefined
    }
    return this.minStack[this.minStack.length - 1]
  }
}
