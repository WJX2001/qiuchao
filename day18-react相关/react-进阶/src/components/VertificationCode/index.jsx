import React, { useEffect, useRef, useState } from 'react'
import { Button, Input } from 'antd'
const VertificationCode = () => {
  const [isNote, setIsNode] = useState(false)
  const [time, setTime] = useState(0)
  const timeRef = useRef()

  useEffect(() => {
    if (time && time !== 0) {
      timeRef.current = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      setIsNode(false)
    }

    return () => {
      clearInterval(timeRef.current)
    }
  }, [time])

  const handleClic = () => {
    setTime(60)
    setIsNode(true)
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>请输入手机号</div>
        <div>
          <Input style={{ width: '400px' }} />
        </div>
        {isNote ? (
          <Button>{time}秒后发送</Button>
        ) : (
          <Button onClick={handleClic}>发送验证码</Button>
        )}
      </div>
    </>
  )
}

export default VertificationCode
