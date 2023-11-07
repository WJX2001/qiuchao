// TODO: 如果自定义hooks没有设计好，比如返回一个改变state的函数，但是没有加条件限定，又可能造成不必要的上下文的执行

import { useMemo, useState } from 'react'

// * 自定义hooks 用于格式化数组将小写转化为大写

function useFormatList(list) {
  return list.map((item) => {
    console.log(111)
    return item.toUpperCase()
  })
}

// TODO: 将条件限定-性能开销加进去

function useFormatListPlus(list) {
  return useMemo(
    () =>
      list.map((item) => {
        console.log(2222)
        return item.toUpperCase()
      }),
    []
  )
}

// TODO: 以下写法会出现的问题：
/**
 * 当你点击 add 的情况下，理想状态下数组不需要重新format 但是实际跟着执行format，无疑增加了性能开销
 * 所以我们需要 对这种情况进行处理
 * @returns
 */

const CustomHooks = () => {
  const list = ['aaa', 'bbb', 'ccc']
  const [number, setNumber] = useState(0)
  // const newList = useFormatList(list)

  // 限定版本的 List
  const newList = useFormatListPlus(list)

  return (
    <div>
      <div className="list">
        {newList.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="number">
        <div>{number}</div>
        <button onClick={() => setNumber(number + 1)}>add</button>
      </div>
    </div>
  )
}

export default CustomHooks
