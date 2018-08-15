import React, { Component } from 'react'
import getMaxZIndex from '@/tools/get_max_zindex'
import ReactDOM from 'react-dom'

/*
  支持格式（type）如下：
    full  全屏 loading
    popup 弹出面板
    block 文档流中独占一行
    默认为 block
  支持自定义颜色 color
*/


class Loading extends Component {
  render() {
    let { text, type } = this.props.Option
    let textDom = text ? <div className="chrysan_loading_text">{text}</div> : null
    return (
      <div className={`chrysan_loading ${type ? type : 'block'}`}>
        <div className="chrysan_loading_layout">
          <div class="ball-clip-rotate-pulse">
            <div></div>
            <div></div>
          </div>
          {textDom}加载中
        </div>
      </div>
    )
  }
}

const createFrame = () => {
  if (!document.querySelector('#chrysan_loading')) {
    let dom = document.createElement('div')
    dom.id = 'chrysan_loading'
    dom.style.zIndex = getMaxZIndex()
    dom.style.position = 'relative'
    document.body.appendChild(dom)
  }
}

export default (user_option) => {
  let option = {type: 'block', color: null, text: null}

  Object.assign(option, user_option)

  if (option.type === 'block') {
    return <Loading Option={option}></Loading>
  } else {
    createFrame()
    ReactDOM.render(<Loading Option={option} />, document.getElementById('chrysan_loading'))
  }
}

export const closeLoading = () => {
  // setTimeout(() => {
    let Dom = document.querySelector('#chrysan_loading')
    if (Dom) Dom.parentNode.removeChild(Dom)
  // }, 250)
}
