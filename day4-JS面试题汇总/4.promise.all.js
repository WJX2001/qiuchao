// TODO: Promise.all

Promise.MyAll = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          arr[index] = res
          count += 1

          if (count === promises.length) resolve(arr)
        })
        .catch(reject)
    })
  })
}
