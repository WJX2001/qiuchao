import React from 'react'
import { Input, Radio, Select, Button, List } from 'antd'
import useFormChange from '../../hooks/useFormChange'
import styles from './index.css'
function IndexForm() {
  const [formData, setFormItem, reset] = useFormChange()
  const { name, options, select } = formData

  return (
    <div className="formbox">
      <div className="des">文本框</div>
      <Input
        name="value1"
        placeholder="请输入名称"
        value={name}
        onChange={(e) => setFormItem('name', e.target.value)}
      />
      <div className="des">单选</div>
      <Radio.Group
        options={[
          { label: '单选项一', value: 'option1' },
          { label: '单选项二', value: 'option2' },
        ]}
        value={options}
        onChange={(e) => setFormItem('options', e.target.value)}
      />
      <div className="des">下拉框</div>
      <Select
        style={{ width: '200px' }}
        value={select}
        defaultValue="哈哈"
        onChange={(value) => setFormItem('select', value)}
        options={[
          { value: '哈哈', label: '哈哈' },
          { value: '嘿嘿', label: '嘿嘿' },
          { value: '你好', label: '你好' },
        ]}></Select>
      <div className="btns">
        <Button type="primary" onClick={() => console.log(formData)}>
          提交
        </Button>
        <Button onClick={reset} style={{ marginLeft: '5px' }}>
          重置
        </Button>
      </div>
    </div>
  )
}

export default IndexForm
