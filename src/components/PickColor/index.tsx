import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.less'
import { SketchPicker } from 'react-color'
import { Popover } from 'antd';
import { resolve } from 'path';
import { setPrimary } from '../Main/store/actionCreators'

interface Iprops {

}

const ROUTE_BASE_NAME = process.env.PUBLIC_URL || '';
const BASE_NAME = ROUTE_BASE_NAME ? ROUTE_BASE_NAME.replace('/', '') : '';
const OLD_LESS_ID = `less:${BASE_NAME ? BASE_NAME + '-' : ''}color: old`;
const LESS_ID = `less:${BASE_NAME ? BASE_NAME + '-' : ''}color`;
const LESS_URL = `${ROUTE_BASE_NAME}/less.min.js`

function loadScript (src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const PickColor: React.FC<Iprops> = () => {
  const [lessLoader, serLessLoader] = useState(false)
  const dispatch = useDispatch()
  const { primaryColor } = useSelector((state:IState) => state.main)
  // 颜色选择的change事件
  const handleChange = () => {

  }
  const handleChangeComplete = (color: any) => {
    // 触发action 改变color
    dispatch(setPrimary(color))
    localStorage.setItem('primary', color)
    const changeColor = () => {
      window['less'].modifyVars({
        '@primary-color': color
      }).then(() => {
        const oldStyle = document.getElementById(OLD_LESS_ID);
        oldStyle && oldStyle.remove()

        const lessLoader = document.getElementById(LESS_ID)
        if (!lessLoader) return
        document.body.insertBefore(lessLoader, document.body.firstChild)
        localStorage.setItem('theme-style-content', lessLoader.innerHTML)
      })
    }

    if (lessLoader) {
      changeColor();
    } else {
      window['less'] = {
        logoLevel: 2,
        async: true,
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#d214a2',
        }
      }
      loadScript(LESS_URL).then(() => {
        serLessLoader(true)
        changeColor()
      })
    }
  }

  // 只需要页面首次加载的时候，执行一次即可。所以千万不要添加依赖项
  useEffect(() => {
    // 快速生效的办法
    const themeStyleContent = localStorage.getItem('theme-style-content');
    if( themeStyleContent ) {
      const themeStyle = document.createElement('style');
      themeStyle.id = OLD_LESS_ID;
      themeStyle.innerHTML = themeStyleContent;
      document.body.insertBefore(themeStyle, document.body.firstChild);
    }

    // .less 文件加载完成之后 就要生成主题 因为 localStorage中的数据可能已经过时了，
    if( primaryColor ) handleChangeComplete(primaryColor);

  }, []);

  const Picker = () => (
    <SketchPicker
      color={primaryColor}
      onChange={handleChange}
      onChangeComplete={({ hex }) => {handleChangeComplete(hex)}}
    />
  )

  return (
    <div className="pick-color"> 
      <Popover
        overlayClassName="pick-color-pop"
        placement="bottom" 
        content={Picker} 
        trigger="click">
          <div className="color-box" style={{background: primaryColor}}></div>
      </Popover>
    </div>
  )
}

export default PickColor