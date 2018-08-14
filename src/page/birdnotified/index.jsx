import React, { Component } from 'react'
import AMap from 'AMap'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // 页面跳转后，返回顶部
    let map = new AMap.Map("allmap",{
       center:[117.000923,36.675807],
       zoom:11,
       resizeEnable: true
    });
    let contextMenu = new AMap.ContextMenu();
    contextMenu.addItem("添加标记", function(e) {
      map.setZoomAndCenter(4, [108.946609, 34.262324]);
    }, 1);
    map.on('rightclick', function(e) {
      contextMenu.open(map, e.lnglat);
    });
  }

  render () {
    return (
      <div id="allmap" className="outer home">

      </div>
    )
  }
}
