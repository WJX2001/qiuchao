// TODO: 统一管理表单状态

// 需要实现的功能：

/**
 *  1. 控制每一个表单的值
 *  2. 具有表单提交，获取整个表单数据功能
 *  3. 点击重置，重置表单功能
 */

import { useMemo, useRef, useState } from 'react'

// 表单 表头 搜索hooks

function useFormChange() {
  const formData = useRef({})

  // forceUpdate 的作用是强制使React 组件重新渲染，如果不使用的话，当formData值改变的时候，React可能不会立即重新渲染

  // useRef 创建的引用的变化不会触发组件的重新渲染，所以即使你改变了formData.current的值，React也不会知道需要重新渲染

  const [, forceUpdate] = useState(null)

  const handerForm = useMemo(() => {
    /* 改变表单单元项 */
    const setFormItem = (keys, value) => {
      const form = formData.current
      form[keys] = value
      forceUpdate(value)
    }

    /* 重置表单 */
    const resetForm = () => {
      const current = formData.current
      for (let name in current) {
        current[name] = ''
      }
      forceUpdate('')
    }
    return [setFormItem, resetForm]
  }, [])

  return [formData.current, ...handerForm]
}

export default useFormChange
