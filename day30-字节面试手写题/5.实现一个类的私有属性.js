class E {
  constructor() {
    this.map = new Map()
    this.map.set(this, { 'B': 1 })
  }

  get () {
    return this.map.get(this)
  }
}

let newObj = new E()

console.log(newObj.get()) // { 'B': 1 }