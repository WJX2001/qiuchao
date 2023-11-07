import React from 'react'
import useDrapDrop from '../../hooks/useDrapDrop'
import '../drop/index.css'
const Dropindex = () => {
  const [style1, dropRef] = useDrapDrop()
  const [style2, dropRef2] = useDrapDrop()

  return (
    <div className="index">
      <div
        className="drop1"
        ref={dropRef}
        style={{ transform: `translate(${style1.x}px, ${style1.y}px)` }}>
        drop1
      </div>
      <div
        className="drop2"
        ref={dropRef2}
        style={{ transform: `translate(${style2.x}px, ${style2.y}px)` }}>
        drop2
      </div>
      <div className="drop3">drop3</div>
    </div>
  )
}

export default Dropindex
