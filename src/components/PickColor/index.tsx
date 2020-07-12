import React, { useState } from 'react'
import './style.less'
import { SketchPicker } from 'react-color'
import { Popover } from 'antd';

interface Iprops {

}

const PickColor: React.FC<Iprops> = () => {
  const [boxColor, setBoxColor] = useState("#000");
  // 颜色选择的change事件
  const handleChange = () => {

  }
  const handleChangeComplete = (color: any) => {
    console.log(color)
    // onChangeComplete(color.hex);
    setBoxColor(color.hex);
  }

  const Picker = () => (
    <SketchPicker
      onChange={handleChange}
      onChangeComplete={handleChangeComplete}
    />
  )

  return (
    <div className="pick-color"> 
      <Popover 
        overlayClassName="pick-color-pop"
        placement="bottom" 
        content={Picker} 
        trigger="click">
          <div className="color-box" style={{background: boxColor}}></div>
      </Popover>
    </div>
  )
}

export default PickColor