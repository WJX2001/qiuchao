// TODO: Promise的方式
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function sleepAsync() {
  console.log('fuck the code')
  await sleep(1000)
  console.log('fuck the code again')
}

sleepAsync()

// TODO: Generator的方式
function* sleepGenerator(time) {
  yield new Promise(function (resolve, reject) {
    setTimeout(resolve, time)
  })
}

sleepGenerator(3000)
  .next()
  .value.then(() => {
    console.log(1)
  })

// TODO: async 方式
function sleep1(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function output() {
  let out = await sleep(3000)
  console.log(2)
  return out
}

output()
