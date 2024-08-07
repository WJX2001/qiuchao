
export const handQueue = (
  reqs // 请求总数
) => {
  reqs = reqs || []


  // 请求队列函数
  const reuqestQueue = (concurrency) => {
    concurrency = concurrency || 6 // 最大并发数
    const queue = [] // 请求池
    let current = 0

    const dequeue = () => {
      while (current < concurrency && queue.length) {
        current++
        const requestPromiseFactory = queue.shift()
        requestPromiseFactory()
          .then(() => { }) // 成功的逻辑
          .catch(error => {
            console.log(error) // 失败
          })
          .finally(() => {
            current--
            dequeue()
          })
      }
    }

    // 返回一个工厂函数
    return (requestPromiseFactory) => {
      queue.push(requestPromiseFactory) // 入队
      dequeue()
    }

  }


  const enqueue = reuqestQueue(6) // 最大并发数

  for (let i = 0; i < reqs.length; i++) {
    enqueue(() => axios.get('/api/test' + i))
  }

}