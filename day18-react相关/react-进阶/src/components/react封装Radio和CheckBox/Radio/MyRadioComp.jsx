import React from 'react'
import MyRadio from './Components/MyRadio'

const radioOptions = [
  { id: 1, value: 'option1', label: '选项1' },
  { id: 2, value: 'option2', label: '选项2' },
  { id: 3, value: 'option3', label: '选项3' },
]

const MyRadioComp = () => {
  return (
    <div>
      <MyRadio data={radioOptions} />
    </div>
  )
}

export default MyRadioComp
