import React, { useEffect, useState } from 'react'

const CountDown = () => {
  const [count, setCount] = useState(60)

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((pre) => {
        if(pre === 0) {
          return 60
        }else {
          return pre-1
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [count])

  return <div>倒计时开始{count}</div>
}

export default CountDown
