//! 需求：1. 统一管理表格的数据，包裹列表，页码，总页码数等信息 2. 实现页码切换，更新数据

// TODO: 设计思路：

/**
 * 1. 我们需要 state 来保存列表数据，总页码数，当前页面等信息。
 * 2. 需要暴露一个方法用于，改变分页面数据，从新请求数据
 */

import React, { useEffect, useMemo, useRef, useState } from 'react'

const useTableRequest = (query, api) => {
  // 是否是第一次请求
  const firstRequest = useRef(false)

  // 保存分页信息
  const [pageOptions, setpageOptions] = useState({
    page: 1,
    pageSize: 3,
  })

  // 保存表格数据

  const [tableData, setTableData] = useState({
    list: [],
    totalCount: 0,
    pageSize: 3,
    page: 1,
  })

  // 请求数据
  const getList = useMemo(() => {
    return async (payload) => {
      if (!api) return
      const data = await api(payload || { ...query, ...pageOptions })
      if (data.code === 0) {
        setTableData(data.data)
        firstRequest = true
      }
    }
  }, [])

  // 改变分页，重新请求数据
  useEffect(() => {
    firstRequest.current &&
      getList({
        ...query,
        ...pageOptions,
      })
  }, [pageOptions])

  // 改变查询条件，重新请求数据
  useEffect(() => {
    getList({
      ...query,
      ...pageOptions,
      page: 1,
    })
  }, [query])
  const handerChange = useMemo(
    () => (options) => setpageOptions({ ...options }),
    []
  )
  return <div>useTableRequest</div>
}

export default useTableRequest
