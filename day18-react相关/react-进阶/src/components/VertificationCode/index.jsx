import React, { useEffect, useRef, useState } from 'react'
import { AutoComplete, Button, Input, Select } from 'antd'
const VertificationCode = () => {
  const [isNote, setIsNode] = useState(false)
  const [time, setTime] = useState(0)
  const timeRef = useRef()
  const { Option } = Select
  const options = [
    { label: 'wjx', value: 1 },
    { label: 'xjc', value: 2 },
  ]
  const children = options.map((item) => (
    <Option key={item.value}>{item.label}</Option>
  ))
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

  const item = {
    jobDisplayName: 'wjx',
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>请输入手机号</div>
        <div>
          <Input style={{ width: '400px' }} value={item.jobDisplayName} />
        </div>
        {isNote ? (
          <Button>{time}秒后发送</Button>
        ) : (
          <Button onClick={handleClic}>发送验证码</Button>
        )}
      </div>
      <AutoComplete
        style={{ width: '200px' }}
        mode="tags"
        placeholder={'请输入'}
        options={[
          { label: 'wjx', value: 1 },
          { label: 'xjc', value: 2 },
        ]}>
        输入选择
      </AutoComplete>
    </>
  )
}

export default VertificationCode
