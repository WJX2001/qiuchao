// TODO: 实现一个列表（单选，多选，取消选择）

import React, { useState } from 'react'

const initialItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]

const MyList = () => {
  // 列表数据
  const [items, setItems] = useState(initialItems)
  const [selectItem, setSelectItem] = useState([])

  // 单选函数
  const handleSingleSelect = (itemId) => {
    let targetItem = items.find((item) => item.id === itemId)
    setSelectItem([targetItem])
  }

  // 多选函数
  const handleMultiSelect = (itemId) => {
    const selectItem = items.find((item) => item.id === itemId)
    setSelectItem((pre) => [...pre, selectItem])
  }

  // 取消函数
  const deleteFunc = (itemId) => {
    const updateItem = selectItem.filter((item) => item.id !== itemId)
    setSelectItem(updateItem)
  }

  return (
    <div>
      <h2>List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            {/* 单选 */}
            <input
              type="radio"
              name="single-select"
              onChange={() => {
                handleSingleSelect(item.id)
              }}
            />
            {/* 多选 */}
            <input
              type="checkbox"
              onChange={() => {
                handleMultiSelect(item.id)
              }}
            />

            {/* 取消按钮 */}
            <button
              onClick={() => {
                deleteFunc(item.id)
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* 显示已选择的项 */}
      <h3>显示已经选择的项目</h3>
      <ul>
        {selectItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default MyList
