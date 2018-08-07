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
    let contextMenuPositon = ''
    let map = new AMap.Map("allmap",{
       center:[93.666697,42.84179],
       zoom:14,
       resizeEnable: true,
       layers: [
           new AMap.TileLayer.Satellite(),
           new AMap.TileLayer.RoadNet()
       ],
    });
    let contextMenu = new AMap.ContextMenu();
    contextMenu.addItem("添加标记", function(e) {
      var marker = new AMap.Marker({
          map: map,
          position: contextMenuPositon //基点位置
      });
      console.log(contextMenuPositon)
    }, 1);
    map.on('rightclick', function(e) {
      contextMenu.open(map, e.lnglat);
       contextMenuPositon = e.lnglat;
    });
  }

  render () {
    return (
      <div id="allmap" className="outer home">
        div
      </div>
    )
  }
}
