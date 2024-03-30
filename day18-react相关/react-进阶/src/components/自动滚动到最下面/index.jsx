import React, { useState, useRef, useEffect } from 'react';

function YourComponent() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // 每当数据更新时，滚动到容器底部
    scrollToBottom();
  }, [data]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const addData = () => {
    // 添加新数据
    const newData = ['222']
    setData(prevData => [...prevData, newData]);
  };

  return (
    <div >
       <button onClick={addData}>添加数据</button>
      <div >
      <div ref={containerRef} style={{ height: '100px', overflowY: 'scroll' }}>
        {/* 这里是你的动态内容 */}
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default YourComponent;
