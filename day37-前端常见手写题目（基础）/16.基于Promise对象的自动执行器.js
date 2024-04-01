// TODO: 基于Promise对象的简单自动执行器

function run (gen) {
  let g = gen()

  function next (data) {
    let result = g.next(data)
    if (result.done) return result.value
    result.value.then(function (data) {
      next(data)
    })
  }
  next()
}