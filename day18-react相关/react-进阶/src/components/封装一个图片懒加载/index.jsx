import React, { useRef, useState } from 'react'

const LazyImage = () => {
  // 存储图片信息
  const [imgs, setImgs] = useState([])
  const observer = useRef()

  // 模拟获取数据
  const fetchData = (page) => {
    fetch('')
      .then((data) => data.json())
      .then((res) => {
        console.log(res)
      })
  }

  fetchData()


  return <div>Lazyimage</div>
}

export default LazyImage
