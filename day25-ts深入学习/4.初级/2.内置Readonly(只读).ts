// TODO: Readonly 是用来让所有属性变为只读

type PersonRead = {
  readonly name: string
  age: number
}

type resultRead = Readonly<PersonRead>

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}
