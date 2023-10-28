import React, { useState } from 'react'

const ChildComponent = ({ onMessage }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    onMessage(inputValue)
  }

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Send Message</button>
    </div>
  )
}

export default ChildComponent
