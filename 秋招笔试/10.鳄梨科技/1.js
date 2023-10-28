const myPromise = Promise.resolve(Promise.resolve('A'))

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log(res))
  setTimeout(() => console.log('B'), 0)
  console.log('C')
}

async function funcTwo() {
  const res = await myPromise
  console.log(await res)
  setTimeout(() => console.log('D'), 0)
  console.log('E')
}

funcOne()
funcTwo()
113
3123
123

123
123
423

312
423
423
